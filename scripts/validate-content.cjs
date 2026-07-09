#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require("fs");
const path = require("path");
const Module = require("module");
const ts = require("typescript");

const rootDir = path.resolve(__dirname, "..");
const srcDir = path.join(rootDir, "src");

const supportedChallengeModes = new Set(["html", "css", "js"]);
const supportedExpectedOutputKinds = new Set(["console", "preview", "behavior"]);
const supportedCurriculumStages = new Set(["beginner", "intermediate", "advanced"]);
const supportedValidationRules = new Set([
  "contains",
  "hasElement",
  "hasElementWithAttribute",
  "hasDoctype",
  "hasTextInElement",
  "cssSelectorExists",
  "cssPropertyExists",
  "cssSelectorPropertyExists",
  "cssSelectorPropertyValue",
  "cssForbiddenTextAbsent",
]);

const expectedFrontendModuleOrder = [
  "web-foundations",
  "html-basics",
  "semantic-html",
  "forms-basic-accessibility",
  "css-core-mechanics",
  "box-model-spacing",
  "local-static-website-project",
  "flexbox-grid-layout",
  "responsive-visual-system",
  "javascript-values-types-functions",
  "javascript-arrays-objects-data-modeling",
  "javascript-dom-events-forms-storage-fetch",
  "local-vanilla-javascript-app",
  "javascript-scope-closure-modules",
  "javascript-async-error-handling",
  "javascript-browser-apis-data-transformation-debugging",
];

function resolveTsPath(basePath) {
  const candidates = [
    basePath,
    `${basePath}.ts`,
    `${basePath}.tsx`,
    path.join(basePath, "index.ts"),
    path.join(basePath, "index.tsx"),
  ];

  return candidates.find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
}

const originalResolveFilename = Module._resolveFilename;
Module._resolveFilename = function resolveFilename(request, parent, isMain, options) {
  if (request.startsWith("@/")) {
    const resolved = resolveTsPath(path.join(srcDir, request.slice(2)));

    if (resolved) {
      return resolved;
    }
  }

  return originalResolveFilename.call(this, request, parent, isMain, options);
};

require.extensions[".ts"] = function loadTs(module, filename) {
  const source = fs.readFileSync(filename, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
      jsx: ts.JsxEmit.ReactJSX,
    },
    fileName: filename,
  });

  module._compile(output.outputText, filename);
};

const { tracks } = require("../src/content/tracks.ts");
const { modules } = require("../src/content/modules.ts");
const { lessons } = require("../src/content/lessons.ts");
const { quizzes } = require("../src/content/quizzes.ts");
const { challenges } = require("../src/content/challenges.ts");
const { curriculumLevelsByTrackId } = require("../src/content/curriculum-levels.ts");

const errors = [];

function addError(message) {
  errors.push(message);
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function validateUnique(collectionName, items, getValue) {
  const seen = new Map();

  for (const item of items) {
    const value = getValue(item);

    if (!isNonEmptyString(value)) {
      addError(`${collectionName}: missing required value.`);
      continue;
    }

    if (seen.has(value)) {
      addError(`${collectionName}: duplicate value "${value}".`);
      continue;
    }

    seen.set(value, item);
  }
}

function validateNoDuplicates(scope, values) {
  const seen = new Set();

  for (const value of values) {
    if (seen.has(value)) {
      addError(`${scope}: duplicate reference "${value}".`);
    }

    seen.add(value);
  }
}

function getBlockIds(lesson) {
  return new Set(lesson.blocks.map((block) => block.id));
}

function getQuizBlocks(lesson) {
  return lesson.blocks.filter((block) => block.type === "quiz");
}

function getCodingPracticeBlocks(lesson) {
  return lesson.blocks.filter((block) => block.type === "coding-practice");
}

function validateQuizQuestion(quiz, question) {
  if (!isNonEmptyString(question.id)) {
    addError(`quiz:${quiz.id}: question is missing id.`);
  }

  if (!isNonEmptyString(question.question)) {
    addError(`quiz:${quiz.id}: question ${question.id} is missing text.`);
  }

  if (!isNonEmptyString(question.explanation)) {
    addError(`quiz:${quiz.id}: question ${question.id} is missing explanation.`);
  }

  if (question.type === "multiple-choice" || question.type === "code-output") {
    if (!Array.isArray(question.options) || question.options.length < 2) {
      addError(`quiz:${quiz.id}: question ${question.id} must have at least two options.`);
    }

    if (!question.options.includes(question.correctAnswer)) {
      addError(`quiz:${quiz.id}: question ${question.id} correctAnswer is not in options.`);
    }
  }

  if (question.type === "true-false" && typeof question.correctAnswer !== "boolean") {
    addError(`quiz:${quiz.id}: question ${question.id} true-false correctAnswer must be boolean.`);
  }

  if (question.type === "fill-blank" && !isNonEmptyString(question.correctAnswer)) {
    addError(`quiz:${quiz.id}: question ${question.id} fill-blank correctAnswer must be text.`);
  }
}

function validateChallengeCode(challenge, fieldName) {
  const code = challenge[fieldName];

  if (!code) {
    addError(`challenge:${challenge.id}: missing ${fieldName}.`);
    return;
  }

  for (const language of ["html", "css", "js"]) {
    if (typeof code[language] !== "string") {
      addError(`challenge:${challenge.id}: ${fieldName}.${language} must be a string.`);
    }
  }
}

function validateChallengeCheck(challenge, check) {
  if (!isNonEmptyString(check.id)) {
    addError(`challenge:${challenge.id}: validation check missing id.`);
  }

  if (!isNonEmptyString(check.label)) {
    addError(`challenge:${challenge.id}: validation check ${check.id} missing label.`);
  }

  if (!supportedValidationRules.has(check.type)) {
    addError(`challenge:${challenge.id}: validation check ${check.id} has unsupported type "${check.type}".`);
  }

  if (
    [
      "contains",
      "hasElement",
      "hasElementWithAttribute",
      "hasTextInElement",
      "cssSelectorExists",
      "cssSelectorPropertyExists",
      "cssSelectorPropertyValue",
    ].includes(check.type) &&
    !isNonEmptyString(check.target)
  ) {
    addError(`challenge:${challenge.id}: validation check ${check.id} requires target.`);
  }

  if (check.type === "hasElementWithAttribute" && !isNonEmptyString(check.attribute)) {
    addError(`challenge:${challenge.id}: validation check ${check.id} requires attribute.`);
  }

  if (
    ["cssPropertyExists", "cssSelectorPropertyExists", "cssSelectorPropertyValue"].includes(check.type) &&
    !isNonEmptyString(check.property)
  ) {
    addError(`challenge:${challenge.id}: validation check ${check.id} requires property.`);
  }

  if (["contains", "cssSelectorPropertyValue", "cssForbiddenTextAbsent"].includes(check.type) && !isNonEmptyString(check.valueIncludes)) {
    addError(`challenge:${challenge.id}: validation check ${check.id} requires valueIncludes.`);
  }
}

function validateChallengeExpectedOutput(challenge) {
  const expectedOutput = challenge.expectedOutput;

  if (!expectedOutput) {
    return;
  }

  if (!supportedExpectedOutputKinds.has(expectedOutput.kind)) {
    addError(`challenge:${challenge.id}: expectedOutput has unsupported kind "${expectedOutput.kind}".`);
  }

  if (expectedOutput.title !== undefined && !isNonEmptyString(expectedOutput.title)) {
    addError(`challenge:${challenge.id}: expectedOutput.title must be non-empty when provided.`);
  }

  if (expectedOutput.description !== undefined && !isNonEmptyString(expectedOutput.description)) {
    addError(`challenge:${challenge.id}: expectedOutput.description must be non-empty when provided.`);
  }

  if (expectedOutput.kind === "console") {
    if (!Array.isArray(expectedOutput.lines) || expectedOutput.lines.length === 0) {
      addError(`challenge:${challenge.id}: console expectedOutput must have at least one line.`);
    } else {
      for (const line of expectedOutput.lines) {
        if (!isNonEmptyString(line)) {
          addError(`challenge:${challenge.id}: console expectedOutput lines must be non-empty strings.`);
        }
      }
    }
  }

  if ((expectedOutput.kind === "preview" || expectedOutput.kind === "behavior") && !isNonEmptyString(expectedOutput.description)) {
    addError(`challenge:${challenge.id}: ${expectedOutput.kind} expectedOutput requires description.`);
  }
}

function validateCurriculumLevelOrder(track, level) {
  const orderByModuleId = new Map(track.moduleIds.map((moduleId, index) => [moduleId, index]));
  const indexes = level.moduleIds.map((moduleId) => orderByModuleId.get(moduleId));

  for (let index = 1; index < indexes.length; index += 1) {
    if (indexes[index] < indexes[index - 1]) {
      addError(`curriculum:${track.id}: level ${level.level} moduleIds do not match active track order.`);
      return;
    }
  }
}

validateUnique("track.id", tracks, (track) => track.id);
validateUnique("track.slug", tracks, (track) => track.slug);
validateUnique("module.id", modules, (moduleItem) => moduleItem.id);
validateUnique("module.slug", modules, (moduleItem) => moduleItem.slug);
validateUnique("lesson.id", lessons, (lesson) => lesson.id);
validateUnique("lesson.slug", lessons, (lesson) => lesson.slug);
validateUnique("quiz.id", quizzes, (quiz) => quiz.id);
validateUnique("challenge.id", challenges, (challenge) => challenge.id);

const tracksById = new Map(tracks.map((track) => [track.id, track]));
const modulesById = new Map(modules.map((moduleItem) => [moduleItem.id, moduleItem]));
const lessonsById = new Map(lessons.map((lesson) => [lesson.id, lesson]));
const quizzesById = new Map(quizzes.map((quiz) => [quiz.id, quiz]));
const challengesById = new Map(challenges.map((challenge) => [challenge.id, challenge]));

for (const track of tracks) {
  validateNoDuplicates(`track:${track.id}.moduleIds`, track.moduleIds);

  for (const moduleId of track.moduleIds) {
    const moduleItem = modulesById.get(moduleId);

    if (!moduleItem) {
      addError(`track:${track.id}: moduleId "${moduleId}" does not exist.`);
      continue;
    }

    if (moduleItem.trackId !== track.id) {
      addError(`track:${track.id}: module "${moduleId}" has mismatched trackId "${moduleItem.trackId}".`);
    }
  }
}

const frontendTrack = tracksById.get("frontend-engineering");
if (!frontendTrack) {
  addError(`track:frontend-engineering: missing active track.`);
} else if (frontendTrack.moduleIds.join("|") !== expectedFrontendModuleOrder.join("|")) {
  addError(
    `track:frontend-engineering: active module order changed. Expected ${expectedFrontendModuleOrder.join(", ")}.`,
  );
}

for (const moduleItem of modules) {
  validateNoDuplicates(`module:${moduleItem.id}.lessonIds`, moduleItem.lessonIds);

  if (!tracksById.has(moduleItem.trackId)) {
    addError(`module:${moduleItem.id}: trackId "${moduleItem.trackId}" does not exist.`);
  }

  for (const lessonId of moduleItem.lessonIds) {
    const lesson = lessonsById.get(lessonId);

    if (!lesson) {
      addError(`module:${moduleItem.id}: lessonId "${lessonId}" does not exist.`);
      continue;
    }

    if (lesson.moduleId !== moduleItem.id) {
      addError(`module:${moduleItem.id}: lesson "${lessonId}" has mismatched moduleId "${lesson.moduleId}".`);
    }
  }
}

for (const lesson of lessons) {
  const parentModule = modulesById.get(lesson.moduleId);

  if (!parentModule) {
    addError(`lesson:${lesson.id}: moduleId "${lesson.moduleId}" does not exist.`);
  } else if (lesson.trackId !== parentModule.trackId) {
    addError(`lesson:${lesson.id}: trackId "${lesson.trackId}" does not match module trackId "${parentModule.trackId}".`);
  }

  validateNoDuplicates(`lesson:${lesson.id}.blockIds`, lesson.blocks.map((block) => block.id));

  const blockIds = getBlockIds(lesson);
  for (const requiredBlockId of lesson.completionRule.requiredBlockIds) {
    if (!blockIds.has(requiredBlockId)) {
      addError(`lesson:${lesson.id}: requiredBlockId "${requiredBlockId}" does not exist in lesson blocks.`);
    }
  }

  for (const block of getQuizBlocks(lesson)) {
    if (!quizzesById.has(block.quizId)) {
      addError(`lesson:${lesson.id}: quiz block "${block.id}" references missing quiz "${block.quizId}".`);
    }
  }

  for (const block of getCodingPracticeBlocks(lesson)) {
    if (!challengesById.has(block.challengeId)) {
      addError(`lesson:${lesson.id}: coding-practice block "${block.id}" references missing challenge "${block.challengeId}".`);
    }
  }
}

for (const quiz of quizzes) {
  if (!lessonsById.has(quiz.lessonId)) {
    addError(`quiz:${quiz.id}: lessonId "${quiz.lessonId}" does not exist.`);
  }

  if (!Array.isArray(quiz.questions) || quiz.questions.length === 0) {
    addError(`quiz:${quiz.id}: must have at least one question.`);
  }

  if (typeof quiz.passingScore !== "number" || quiz.passingScore < 0 || quiz.passingScore > 100) {
    addError(`quiz:${quiz.id}: passingScore must be between 0 and 100.`);
  }

  validateNoDuplicates(`quiz:${quiz.id}.questionIds`, quiz.questions.map((question) => question.id));
  for (const question of quiz.questions) {
    validateQuizQuestion(quiz, question);
  }
}

for (const challenge of challenges) {
  if (!lessonsById.has(challenge.lessonId)) {
    addError(`challenge:${challenge.id}: lessonId "${challenge.lessonId}" does not exist.`);
  }

  validateChallengeCode(challenge, "starterCode");

  if (challenge.solutionCode) {
    validateChallengeCode(challenge, "solutionCode");
  }

  if (challenge.validation) {
    if (!supportedChallengeModes.has(challenge.validation.mode)) {
      addError(`challenge:${challenge.id}: unsupported validation mode "${challenge.validation.mode}".`);
    }

    if (!Array.isArray(challenge.validation.checks) || challenge.validation.checks.length === 0) {
      addError(`challenge:${challenge.id}: validation checks must not be empty when validation exists.`);
    } else {
      validateNoDuplicates(
        `challenge:${challenge.id}.validation.checkIds`,
        challenge.validation.checks.map((check) => check.id),
      );

      for (const check of challenge.validation.checks) {
        validateChallengeCheck(challenge, check);
      }
    }
  }

  validateChallengeExpectedOutput(challenge);
}

const curriculumLevelCount = Object.values(curriculumLevelsByTrackId).reduce(
  (count, levels) => count + levels.length,
  0,
);

for (const [trackId, levels] of Object.entries(curriculumLevelsByTrackId)) {
  const track = tracksById.get(trackId);

  if (!track) {
    addError(`curriculum:${trackId}: track does not exist.`);
    continue;
  }

  const activeModuleIds = new Set(track.moduleIds);
  const levelModuleIds = [];

  for (const level of levels) {
    if (!supportedCurriculumStages.has(level.stage)) {
      addError(`curriculum:${trackId}: level ${level.level} has unsupported stage "${level.stage}".`);
    }

    validateNoDuplicates(`curriculum:${trackId}.level:${level.level}.moduleIds`, level.moduleIds);
    validateCurriculumLevelOrder(track, level);

    for (const moduleId of level.moduleIds) {
      if (!modulesById.has(moduleId)) {
        addError(`curriculum:${trackId}: level ${level.level} references missing module "${moduleId}".`);
      }

      if (!activeModuleIds.has(moduleId)) {
        addError(`curriculum:${trackId}: level ${level.level} references module "${moduleId}" outside active track order.`);
      }

      levelModuleIds.push(moduleId);
    }
  }

  const levelModuleIdSet = new Set(levelModuleIds);
  for (const moduleId of track.moduleIds) {
    if (!levelModuleIdSet.has(moduleId)) {
      addError(`curriculum:${trackId}: active module "${moduleId}" is missing from curriculum levels.`);
    }
  }
}

if (errors.length > 0) {
  console.error("Content validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Content validation passed:");
console.log(`- tracks: ${tracks.length}`);
console.log(`- modules: ${modules.length}`);
console.log(`- lessons: ${lessons.length}`);
console.log(`- quizzes: ${quizzes.length}`);
console.log(`- challenges: ${challenges.length}`);
console.log(`- curriculum levels: ${curriculumLevelCount}`);
