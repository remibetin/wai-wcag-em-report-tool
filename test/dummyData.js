'use strict';

angular.module('wertDummy', [])
.value('basicEvalOutput', {
  "@graph": [
    {
      "@context": {
        "@vocab": "http://www.w3.org/TR/WCAG-EM/#",
        "wcag20": "http://www.w3.org/TR/WCAG20/#",
        "earl": "http://www.w3.org/ns/earl#",
        "dct": "http://purl.org/dc/terms/",
        "reporter": "https://github.com/w3c/wcag-em-report-tool/blob/master/dataformat.md#",
        "conformanceTarget": {
          "id": "step1b",
          "type": "id"
        },
        "evaluationScope": {
          "id": "step1"
        },
        "accessibilitySupportBaseline": {
          "id": "step1c"
        },
        "additionalEvalRequirement": {
          "id": "step1d"
        },
        "siteScope": {
          "id": "step1a"
        },
        "commonPages": {
          "id": "step2a"
        },
        "essentialFunctionality": {
          "id": "step2b"
        },
        "pageTypeVariety": {
          "id": "step2c"
        },
        "otherRelevantPages": {
          "id": "step2e"
        },
        "structuredSample": {
          "id": "step3a"
        },
        "randomSample": {
          "id": "step3b"
        },
        "specifics": {
          "id": "step5b"
        },
        "auditResult": {
          "id": "step4"
        },
        "outcome": {
          "type": "id"
        },
        "subject": {
          "type": "id"
        },
        "assertedBy": {
          "type": "id"
        },
        "testRequirement": {
          "type": "id"
        },
        "creator": {
          "type": "id"
        },
        "handle": "reporter:handle",
        "description": "reporter:description",
        "tested": "reporter:tested",
        "id": "@id",
        "type": "@type",
        "title": "dct:title",
        "hasPart": "dct:hasPart",
        "specs": "@id",
        "reliedUponTechnology": "wcag20:reliedupondef"
      },
      "type": "evaluation",
      "id": "_:123",
      "evaluationScope": {
        "conformanceTarget": "wcag20:level_aaa",
        "additionalEvalRequirement": "evalreqs",
        "website": {
          "id": "_:someSite",
          "title": "sitename",
          "siteScope": "sitescope"
        },
        "accessibilitySupportBaseline": "base"
      },
      "auditResult": [
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:text-equiv-all",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:passed",
            "description": "I passed"
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:media-equiv-av-only-alt",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:media-equiv-captions",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:media-equiv-audio-desc",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:content-structure-separation-programmatic",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:content-structure-separation-sequence",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:content-structure-separation-understanding",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:visual-audio-contrast-without-color",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:visual-audio-contrast-dis-audio",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:keyboard-operation-keyboard-operable",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:keyboard-operation-trapping",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:time-limits-required-behaviors",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:time-limits-pause",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:seizure-does-not-violate",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:navigation-mechanisms-skip",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:navigation-mechanisms-title",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:navigation-mechanisms-focus-order",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:navigation-mechanisms-refs",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:meaning-doc-lang-id",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:consistent-behavior-receive-focus",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:consistent-behavior-unpredictable-change",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:minimize-error-identified",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:minimize-error-cues",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:ensure-compat-parses",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        },
        {
          "type": "earl:assertion",
          "testRequirement": "wcag20:ensure-compat-rsv",
          "assertedBy": "_:evaluator",
          "subject": "_:website",
          "result": {
            "outcome": "earl:untested",
            "description": ""
          },
          "mode": "manual",
          "hasPart": []
        }
      ],
      "title": "rep-title",
      "commissioner": "evalcomm",
      "summary": "summ",
      "specifics": "specs",
      "creator": "_:niceGuy",
      "structuredSample": {
        "webpage": [
          {
            "type": "webpage",
            "id": "_:struct_0",
            "description": "http://www.example.com",
            "handle": "page1",
            "tested": false
          }
        ]
      },
      "randomSample": {
        "webpage": [
          {
            "type": "webpage",
            "id": "_:rand_0",
            "description": "http://www.example.com/random",
            "handle": "random1",
            "tested": false
          }
        ]
      },
      "reliedUponTechnology": [
        {
          "title": "HTML5",
          "id": "http://www.w3.org/TR/html5/"
        },
        {
          "title": "CSS",
          "id": "http://www.w3.org/Style/CSS/specs/"
        }
      ],
      "essentialFunctionality": "ess-func",
      "pageTypeVariety": "vari-types",
      "commonPages": [],
      "otherRelevantPages": []
    },
    {
      "@context": {
        "@vocab": "http://xmlns.com/foaf/spec/#",
        "id": "@id",
        "type": "@type"
      },
      "id": "_:niceGuy",
      "type": "Person",
      "name": "terminator"
    }
  ]
});