
const prettify = require('.')

console.log(prettify({ "_type": "File",
  "attrs": [],
  "items": [ { "_type": "ItemMacro",
               "attrs": [ { "_type": "Attribute",
                            "pound_token": { "_type": "Pound",
                                       "span": { "_type": "Span",
                                                  "start": { "_type": "LineColumn",
                                                             "line": 1,
                                                             "column": 0 },
                                                  "end": { "_type": "LineColumn",
                                                             "line": 1,
                                                             "column": 1 } } },
                            "style": { "_type": "AttrStyle::Outer" },
                            "path": { "_type": "Path",
                                       "segments": { "0": { "_type": "PathSegment",
                                                         "ident": { "_type": "Ident",
                                                                    "to_string": "doc",
                                                                    "span": { "_type": "Span",
                                                                               "start": { "_type": "LineColumn",
                                                                                          "line": 1,
                                                                                          "column": 2 },
                                                                               "end": { "_type": "LineColumn",
                                                                                          "line": 1,
                                                                                          "column": 5 } } },
                                                         "arguments": { "_type": "PathArguments::None" },
                                                         "span": { "_type": "Span",
                                                                    "start": { "_type": "LineColumn",
                                                                               "line": 1,
                                                                               "column": 2 },
                                                                    "end": { "_type": "LineColumn",
                                                                               "line": 1,
                                                                               "column": 5 } } },
                                                  "_type": "Punctuated",
                                                  "length": 1 },
                                       "span": { "_type": "Span",
                                                  "start": { "_type": "LineColumn",
                                                             "line": 1,
                                                             "column": 2 },
                                                  "end": { "_type": "LineColumn",
                                                             "line": 1,
                                                             "column": 5 } } },
                            "tokens": { "0": { "_type": "Punct",
                                              "as_char": "=",
                                              "spacing": { "_type": "Spacing::Alone" },
                                              "span": { "_type": "Span",
                                                         "start": { "_type": "LineColumn",
                                                                    "line": 1,
                                                                    "column": 6 },
                                                         "end": { "_type": "LineColumn",
                                                                    "line": 1,
                                                                    "column": 7 } } },
                                       "1": { "_type": "Ident",
                                              "to_string": "include_str",
                                              "span": { "_type": "Span",
                                                         "start": { "_type": "LineColumn",
                                                                    "line": 1,
                                                                    "column": 8 },
                                                         "end": { "_type": "LineColumn",
                                                                    "line": 1,
                                                                    "column": 19 } } },
                                       "2": { "_type": "Punct",
                                              "as_char": "!",
                                              "spacing": { "_type": "Spacing::Alone" },
                                              "span": { "_type": "Span",
                                                         "start": { "_type": "LineColumn",
                                                                    "line": 1,
                                                                    "column": 19 },
                                                         "end": { "_type": "LineColumn",
                                                                    "line": 1,
                                                                    "column": 20 } } },
                                       "3": { "_type": "Group",
                                              "delimiter": { "_type": "Delimiter::Parenthesis" },
                                              "stream": { "0": { "_type": "Literal",
                                                                "to_string": "\"panic.md\"",
                                                                "span": { "_type": "Span",
                                                                           "start": { "_type": "LineColumn",
                                                                                      "line": 1,
                                                                                      "column": 21 },
                                                                           "end": { "_type": "LineColumn",
                                                                                      "line": 1,
                                                                                      "column": 31 } } },
                                                         "_type": "TokenStream",
                                                         "length": 1 } } } } ] } ] }))