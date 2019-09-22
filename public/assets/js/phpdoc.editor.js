var phpdoc = {
    elements: {},
    renderers: {}
};

var config_data = {
    "meta": {},
    "data": {
        "name": "",
        "purpose": {
            "meta": {},
            "data": {
                "translations": {
                    "en": {
                        "meta": {
                            "modified": 1569165209.015
                        },
                        "data": {
                            "lang": "en",
                            "format": "text",
                            "contents": "Finds the length of the initial segment of a string consisting entirely of characters contained within a given mask"
                        }
                    }
                }
            }
        },
        "description": {
            "meta": {},
            "data": {
                "blocks": [
                    {
                        "meta": {},
                        "data": {
                            "translations": {
                                "en": {
                                    "meta": {},
                                    "data": {
                                        "lang": "en",
                                        "format": "text",
                                        "contents": "Finds the length of the initial segment of subject that contains only characters from mask.\n\nIf start and length are omitted, then all of subject will be examined. If they are included, then the effect will be the same as calling strspn(substr($subject, $start, $length), $mask) (see substr for more information)."
                                    }
                                },
                                "fr": {
                                    "meta": {
                                        "modified": 1569170093.2
                                    },
                                    "data": {
                                        "lang": "fr",
                                        "format": "text",
                                        "contents": "Trouve la longueur du segment initial de subject qui contient uniquement les caractères depuis le masque mask.\n\nSi les paramètres start et length sont omis, alors toutes les chaînes subject seront analysées. S'ils sont fournis, alors les effets seront identiques à appeler strspn(substr($subject, $start, $length), $mask) (voir substr pour plus d'informations)."
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        },
        "parameters": [
            {
                "meta": {},
                "data": {
                    "types": [
                        {
                            "meta": {},
                            "data": {
                                "type_name": "string",
                                "description": {
                                    "meta": {},
                                    "data": {
                                        "blocks": [
                                            {
                                                "meta": {},
                                                "data": {
                                                    "translations": {
                                                        "en": {
                                                            "meta": {},
                                                            "data": {
                                                                "lang": "en",
                                                                "format": "text",
                                                                "contents": "The string to examine."
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    ],
                    "name": "subject",
                    "optional": false,
                    "default_value": ""
                }
            },
            {
                "meta": {},
                "data": {
                    "types": [
                        {
                            "meta": {},
                            "data": {
                                "type_name": "string",
                                "description": {
                                    "meta": {},
                                    "data": {
                                        "blocks": [
                                            {
                                                "meta": {},
                                                "data": {
                                                    "translations": {
                                                        "en": {
                                                            "meta": {},
                                                            "data": {
                                                                "lang": "en",
                                                                "format": "text",
                                                                "contents": "The list of allowable characters."
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    ],
                    "name": "mask",
                    "optional": false,
                    "default_value": ""
                }
            },
            {
                "meta": {},
                "data": {
                    "types": [
                        {
                            "meta": {},
                            "data": {
                                "type_name": "int",
                                "description": {
                                    "meta": {},
                                    "data": {
                                        "blocks": [
                                            {
                                                "meta": {},
                                                "data": {
                                                    "translations": {
                                                        "en": {
                                                            "meta": {},
                                                            "data": {
                                                                "lang": "en",
                                                                "format": "text",
                                                                "contents": "The position in <parameter>subject</parameter> to start searching.\n\nIf <parameter>start</parameter> is given and is non-negative, then <function>strspn</function> will begin examining <parameter>subject</parameter> at the <parameter>start</parameter> 'th position. For instance, in the string ' <literal>abcdef</literal> ', the character at position <literal>0</literal> is ' <literal>a</literal> ', the character at position <literal>2</literal> is ' <literal>c</literal> ', and so forth.\n\nIf <parameter>start</parameter> is given and is negative, then <function>strspn</function> will begin examining <parameter>subject</parameter> at the <parameter>start</parameter> 'th position from the end of <parameter>subject</parameter> ."
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    ],
                    "name": "start",
                    "optional": true,
                    "default_value": ""
                }
            },
            {
                "meta": {},
                "data": {
                    "types": [
                        {
                            "meta": {},
                            "data": {
                                "type_name": "int",
                                "description": {
                                    "meta": {},
                                    "data": {
                                        "blocks": [
                                            {
                                                "meta": {},
                                                "data": {
                                                    "translations": {
                                                        "en": {
                                                            "meta": {},
                                                            "data": {
                                                                "lang": "en",
                                                                "format": "text",
                                                                "contents": "The length of the segment from <parameter>subject</parameter> to examine.\n\nIf <parameter>length</parameter> is given and is non-negative, then <parameter>subject</parameter> will be examined for <parameter>length</parameter> characters after the starting position.\n\nIf <parameter>length</parameter> is given and is negative, then <parameter>subject</parameter> will be examined from the starting position up to <parameter>length</parameter> characters from the end of <parameter>subject</parameter> ."
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    ],
                    "name": "length",
                    "optional": true,
                    "default_value": ""
                }
            }
        ],
        "examples": {
            "meta": {},
            "data": {
                "blocks": [
                    {
                        "meta": {
                            "modified": 1569169917.548
                        },
                        "data": {
                            "translations": {
                                "en": {
                                    "meta": {
                                        "modified": 1569169920.867
                                    },
                                    "data": {
                                        "lang": "en",
                                        "format": "text",
                                        "contents": "<?php\n// subject does not start with any characters from mask\nvar_dump(strspn(\"foo\", \"o\"));\n\n// examine two characters from subject starting at offset 1\nvar_dump(strspn(\"foo\", \"o\", 1, 2));\n\n// examine one character from subject starting at offset 1\nvar_dump(strspn(\"foo\", \"o\", 1, 1));\n?>"
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        },
        "notes": {
            "meta": {},
            "data": {
                "blocks": [
                    {
                        "meta": {
                            "modified": 1569169852.063
                        },
                        "data": {
                            "translations": {
                                "en": {
                                    "meta": {
                                        "modified": 1569169858.404
                                    },
                                    "data": {
                                        "lang": "en",
                                        "format": "text",
                                        "contents": "This is some random example of notes"
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        },
        "return_value_description": {
            "meta": {},
            "data": {
                "blocks": []
            }
        },
        "return_types": [
            {
                "meta": {
                    "modified": 1569164469.462
                },
                "data": {
                    "type_name": "string",
                    "description": {
                        "meta": {},
                        "data": {
                            "translations": {}
                        }
                    }
                }
            },
            {
                "meta": {
                    "modified": 1569164472.182
                },
                "data": {
                    "type_name": "false",
                    "description": {
                        "meta": {},
                        "data": {
                            "translations": {
                                "en": {
                                    "meta": {
                                        "modified": 1569164476.928
                                    },
                                    "data": {
                                        "lang": "en",
                                        "format": "text",
                                        "contents": "An error has occurred"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        ]
    }
};


/**
 * @constructor
 */
phpdoc.Editor = function (jParent, init) {
    var self = this,
        sections = [],
        last_json = '',
        renderer = new phpdoc.renderers.Method();

    this.nullData = function () {
        return {
            meta: {},
            data: {}
        };
    };

    /**
     * @return {phpdoc.Editor.FeatureBlock}
     */
    this.makeFeatureBlock = function (id) {
        return new phpdoc.Editor.FeatureBlock(this, '', id);
    };

    let load_config = JSON.parse(window.localStorage.getItem('latest_config_2')) || config_data;

    var panel_container = $('#previews');

    function showPreviewPanel(panel_id) {
        panel_container.children().hide();
        panel_container.find('.panel-' + panel_id).show();
    }

    $('#show-preview').click(function () {
        showPreviewPanel('html');
    });

    $('#show-json').click(function () {
        showPreviewPanel('json');
    });

    var method = new phpdoc.elements.Method(this, load_config);
    jParent.append(method.getElement());

    this.changed = function () {
        let serialized = method.serialize(),
            json = JSON.stringify(serialized, null, 4);

        if (json !== last_json) {
            let html = renderer.render(serialized);

            $('#json-preview').val(json);
            $('#html-preview').children().detach();
            $('#html-preview').append(html);

            last_json = json;
            window.localStorage.setItem('latest_config_2', JSON.stringify(serialized));
        }
    };

    this.getLanguageList = function () {
        return {
            'en': 'English (Default)',
            'fr': 'French'
        };
    };

    setInterval(function () {
        self.changed();
    }, 1000);
};

var config_2 = {
    "meta": {}, "data": {
        "name": "",
        "description": {
            "data": {
                "blocks": [{
                    "data": {
                        "translations": {
                            "en": {
                                "meta": {},
                                "data": {"lang": "en", "format": "text", "contents": ""}
                            }
                        }
                    }
                }]
            }
        },
        "parameters": [{
            "data": {
                "name": "subject",
                "optional": false,
                "types": [{
                    "data": {
                        "type_name": "string",
                        "description": {
                            "data": {
                                "blocks": [{
                                    "data": {
                                        "translations": {
                                            "en": {
                                                "meta": {},
                                                "data": {
                                                    "lang": "en",
                                                    "format": "text",
                                                    "contents": "The string to examine."
                                                }
                                            }
                                        }
                                    }
                                }]
                            }
                        }
                    }
                }]
            }
        }, {
            "data": {
                "name": "mask",
                "optional": false,
                "types": [{
                    "data": {
                        "type_name": "string",
                        "description": {
                            "data": {
                                "blocks": [{
                                    "data": {
                                        "translations": {
                                            "en": {
                                                "meta": {},
                                                "data": {
                                                    "lang": "en",
                                                    "format": "text",
                                                    "contents": "The list of allowable characters."
                                                }
                                            }
                                        }
                                    }
                                }]
                            }
                        }
                    }
                }]
            }
        }, {
            "data": {
                "name": "start",
                "optional": true,
                "types": [{
                    "data": {
                        "type_name": "int",
                        "description": {
                            "data": {
                                "blocks": [{
                                    "data": {
                                        "translations": {
                                            "en": {
                                                "meta": {},
                                                "data": {
                                                    "lang": "en",
                                                    "format": "text",
                                                    "contents": "The position in <parameter>subject<\/parameter> to start searching.\n\nIf <parameter>start<\/parameter> is given and is non-negative, then <function>strspn<\/function> will begin examining <parameter>subject<\/parameter> at the <parameter>start<\/parameter> 'th position. For instance, in the string ' <literal>abcdef<\/literal> ', the character at position <literal>0<\/literal> is ' <literal>a<\/literal> ', the character at position <literal>2<\/literal> is ' <literal>c<\/literal> ', and so forth.\n\nIf <parameter>start<\/parameter> is given and is negative, then <function>strspn<\/function> will begin examining <parameter>subject<\/parameter> at the <parameter>start<\/parameter> 'th position from the end of <parameter>subject<\/parameter> ."
                                                }
                                            }
                                        }
                                    }
                                }]
                            }
                        }
                    }
                }]
            }
        }, {
            "data": {
                "name": "length",
                "optional": true,
                "types": [{
                    "data": {
                        "type_name": "int",
                        "description": {
                            "data": {
                                "blocks": [{
                                    "data": {
                                        "translations": {
                                            "en": {
                                                "meta": {},
                                                "data": {
                                                    "lang": "en",
                                                    "format": "text",
                                                    "contents": "The length of the segment from <parameter>subject<\/parameter> to examine.\n\nIf <parameter>length<\/parameter> is given and is non-negative, then <parameter>subject<\/parameter> will be examined for <parameter>length<\/parameter> characters after the starting position.\n\nIf <parameter>length<\/parameter> is given and is negative, then <parameter>subject<\/parameter> will be examined from the starting position up to <parameter>length<\/parameter> characters from the end of <parameter>subject<\/parameter> ."
                                                }
                                            }
                                        }
                                    }
                                }]
                            }
                        }
                    }
                }]
            }
        }]
    }
}

phpdoc.Editor.FeatureBlock = function (editor, label, id) {
    var self = this,
        state = {
            title: label,
        },
        events = {
            onClickAdd: {
                icon: null,
                callback: null
            }
        },
        element,
        menu_bar,
        menu_title,
        menu_tools,
        content_area;

    element = $('<div style="border: 1px solid #eeeeee; margin: 5px; margin-left: 10px; margin-right: 10px"></div>').append(
        menu_bar = $('<div class="fbar-title"></div>')
            .append(
                menu_title = $('<span style="cursor: pointer"></span>').text(label),
                menu_tools = $('<span style="float: right"></span>').append(
                    events.onClickAdd.icon = $('<img src="./assets/icons/silk/add.png" alt="add" style="cursor: pointer; margin: 3px; display: none; vertical-align: center" />').click(function (e) {
                        if (events.onClickAdd.callback) {
                            events.onClickAdd.callback.call(null, e);
                        }
                        self.show();
                    })
                )
            ).click(function () {
                content_area.toggle(!content_area.is(':visible'));
            }),
        content_area = $('<div style="padding: 5px; display: none"></div>').append(top || {})
    );

    /**
     * Returns the top level element which represents this section, everything else will
     * be contained within it, the children can be manipulated by their owner but everything
     * else should only be manipulated via this class
     *
     * @return {jQuery}
     */

    this.getElement = function () {
        return element;
    };

    this.getId = function () {
        return id;
    };

    /**
     * @param {string} title
     * @return {phpdoc.Editor.FeatureBlock}
     */
    this.setTitle = function (title) {
        state.title = title;
        menu_title.text(title || '');
        return self;
    };

    /**
     * Bind a callback to the append event
     *
     * @param callback
     * @return {phpdoc.Editor.FeatureBlock}
     */

    this.onClickAdd = function (callback) {
        events.onClickAdd.icon.show();
        events.onClickAdd.callback = callback;
        return this;
    };

    /**
     * Adds content to content area of this feature box
     *
     * @param {jQuery|array} content
     * @return {phpdoc.Editor.FeatureBlock}
     */

    this.append = function (content) {
        content_area.append(content);
        return self;
    };

    /**
     * Opens up the content area
     * @return {phpdoc.Editor.FeatureBlock}
     */
    this.show = function () {
        content_area.slideDown();
        return self;
    };
};