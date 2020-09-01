define("ace/mode/pasukon_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var PasukonHighlightRules = function() {
   this.$rules = {
        "start" : [
            {
                token: 'keyword.other',
                regex: 'lex',
                next:  'lexing'
            },
            {
                token: 'variable.language',
                regex: /[a-zA-Z][a-zA-Z0-9_-]*/,
                next: 'parsing-rule-definition'
            }
        ],
        "lexing": [
            {
                token: 'keyword.other',
                regex: /match|ignore/,
                next: 'lexing-token-name'
            },
            {
                token: 'keyword.other',
                regex: '/lex',
                next: 'parsing'
            }
        ],
        "lexing-token-name": [
            {
                token: 'constant.language',
                regex: /[a-zA-Z][a-zA-Z0-9]*/,
                next: 'lexing-token-matcher'
            }
        ],
        "lexing-token-matcher": [
            {
                token: 'string.single',
                regex: /'[^']*'|"[^"]*"/,
                next: 'lexing'
            },
            {
                token: 'string.regexp',
                regex: /\/[^/]*\/|{[^}]*}/,
                next: 'lexing'
            }
        ],
        "parsing": [
            {
                token: 'variable.language',
                regex: /[a-zA-Z][a-zA-Z0-9_-]*/,
                next: 'parsing-rule-definition'
            }
        ],
        "parsing-rule-definition": [
            {
                token: 'keyword.operator',
                regex: /\|>|\|/
            },
            {
                token: 'keyword.operator',
                regex: /\b(?:then|or|many0|many1|opt|as)\b/
            },
            {
                token: 'constant.language',
                regex: /:\s*[a-zA-Z][a-zA-Z0-9_-]*/
            },
            {
                token: 'keyword.control',
                regex: /\*|\?|\+/
            },
            {
                token: 'string.single',
                regex: /'[^']*'|"[^"]*"/
            },
            {
                token: 'keyword.operator',
                regex: /;/,
                next: "parsing"
            }
        ]
    };
};

oop.inherits(PasukonHighlightRules, TextHighlightRules);
exports.PasukonHighlightRules = PasukonHighlightRules;
}),
define("ace/mode/pasukon", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/matching_brace_outdent"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
// var Tokenizer = require("../tokenizer").Tokenizer;
var MatchingBraceOutdent = require("./matching_brace_outdent").MatchingBraceOutdent;
var PasukonHighlightRules = require("./pasukon_highlight_rules").PasukonHighlightRules;

var Mode = function() {
    this.HighlightRules = PasukonHighlightRules;
    this.$outdent = new MatchingBraceOutdent();
};
oop.inherits(Mode, TextMode);

// (function() {
//     // configure comment start/end characters
//     this.lineCommentStart = "//";
//     this.blockComment = {start: "/*", end: "*/"};
//
//     // special logic for indent/outdent.
//     // By default ace keeps indentation of previous line
//     this.getNextLineIndent = function(state, line, tab) {
//         var indent = this.$getIndent(line);
//         return indent;
//     };
//
//     this.checkOutdent = function(state, line, input) {
//         return this.$outdent.checkOutdent(line, input);
//     };
//
//     this.autoOutdent = function(state, doc, row) {
//         this.$outdent.autoOutdent(doc, row);
//     };
//
//     // create worker for live syntax checking
//     this.createWorker = function(session) {
//         var worker = new WorkerClient(["ace"], "ace/mode/pasukon_worker", "NewWorker");
//         worker.attachToDocument(session.getDocument());
//         worker.on("errors", function(e) {
//             session.setAnnotations(e.data);
//         });
//         return worker;
//     };
//
// }).call(Mode.prototype);

exports.Mode = Mode;
}),
define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t,n){"use strict";var r=e("../range").Range,i=function(){};(function(){this.checkOutdent=function(e,t){return/^\s+$/.test(e)?/^\s*\}/.test(t):!1},this.autoOutdent=function(e,t){var n=e.getLine(t),i=n.match(/^(\s*\})/);if(!i)return 0;var s=i[1].length,o=e.findMatchingBracket({row:t,column:s});if(!o||o.row==t)return 0;var u=this.$getIndent(e.getLine(o.row));e.replace(new r(t,0,t,s-1),u)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(i.prototype),t.MatchingBraceOutdent=i});

(function () {
  window.require(["ace/mode/pasukon"], function(m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
