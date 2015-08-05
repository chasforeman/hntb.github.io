/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'bebas-neue, sans-serif': '<script src=\"http://use.edgefonts.net/bebas-neue:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '1200px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,176,225,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'corridors',
                            type: 'text',
                            rect: ['871px', '159px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">of Dallas' urban corridors</p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"],
                            textShadow: ["rgba(0,0,0,0.65098)", 1, 1, 2],
                            transform: [[],[],[],['1.08695','1.08696']]
                        },
                        {
                            id: 'miles',
                            type: 'text',
                            rect: ['1247px', '114px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\"><span style=\"font-family: bebas-neue, sans-serif; color: rgb(31, 38, 80);\">25 miles</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"],
                            transform: [[],[],[],['2.39086','2.39086']]
                        },
                        {
                            id: 'concerning',
                            type: 'text',
                            rect: ['894px', '71px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">concerning more than</p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"],
                            textShadow: ["rgba(0,0,0,0.65098)", 1, 1, 2],
                            transform: [[],[],[],['1.08695','1.08696']]
                        },
                        {
                            id: 'stakeholders',
                            type: 'text',
                            rect: ['584px', '159px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">with stakeholders</p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"],
                            textShadow: ["rgba(0,0,0,0.65098)", 1, 1, 2],
                            transform: [[],[],[],['1.08695','1.08696']]
                        },
                        {
                            id: 'sessions',
                            type: 'text',
                            rect: ['631px', '114px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\"><span style=\"font-family: bebas-neue, sans-serif; color: rgb(31, 38, 80);\">64 sessions</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"],
                            transform: [[],[],[],['2.39086','2.39086']]
                        },
                        {
                            id: 'during',
                            type: 'text',
                            rect: ['644px', '70px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">during</p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"],
                            textShadow: ["rgba(0,0,0,0.65098)", 1, 1, 2],
                            transform: [[],[],[],['1.08695','1.08696']]
                        },
                        {
                            id: 'hours',
                            type: 'text',
                            rect: ['355px', '131px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\"><span style=\"font-family: bebas-neue, sans-serif;\">118 hours</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(31,38,80,1.00)", "normal", "none", "", "break-word", "nowrap"],
                            transform: [[],[],[],['2.39086','2.39086']]
                        },
                        {
                            id: 'for_more_than',
                            type: 'text',
                            rect: ['324px', '91px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">for more than</p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"],
                            textShadow: ["rgba(0,0,0,0.65098)", 1, 1, 2],
                            transform: [[],[],[],['1.08695','1.08696']]
                        },
                        {
                            id: 'people',
                            type: 'text',
                            rect: ['96px', '132px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\"><span style=\"font-family: bebas-neue, sans-serif; color: rgb(31, 38, 80);\">108</span><span style=\"font-family: bebas-neue, sans-serif; color: rgb(255, 255, 255);\"> </span><span style=\"font-family: bebas-neue, sans-serif; color: rgb(31, 38, 80);\">people</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"],
                            transform: [[],[],[],['2.39086','2.39086']]
                        },
                        {
                            id: 'weve',
                            type: 'text',
                            rect: ['52px', '92px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">we've listened to</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"],
                            textShadow: ["rgba(0,0,0,0.65098)", 1, 1, 2],
                            transform: [[],[],[],['1.08695','1.08696']]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['273px', '41px', '5px', '176px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0.65217','0.65217']]
                        },
                        {
                            id: 'Rectangle2Copy3',
                            type: 'rect',
                            rect: ['820px', '41px', '5px', '176px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0.65217','0.65217']]
                        },
                        {
                            id: 'Rectangle2Copy',
                            type: 'rect',
                            rect: ['528px', '41px', '5px', '176px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0.65217','0.65217']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1200px', '250px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid27",
                            "opacity",
                            2500,
                            1000,
                            "linear",
                            "${stakeholders}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${weve}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${people}",
                            '270px',
                            '132px'
                        ],
                        [
                            "eid19",
                            "opacity",
                            1250,
                            1000,
                            "linear",
                            "${hours}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${people}",
                            '0',
                            '1'
                        ],
                        [
                            "eid94",
                            "opacity",
                            3500,
                            250,
                            "linear",
                            "${Rectangle2Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid98",
                            "left",
                            1250,
                            1000,
                            "linear",
                            "${hours}",
                            '355px',
                            '356px'
                        ],
                        [
                            "eid37",
                            "top",
                            2500,
                            1000,
                            "linear",
                            "${sessions}",
                            '135px',
                            '114px'
                        ],
                        [
                            "eid104",
                            "left",
                            4000,
                            1000,
                            "linear",
                            "${miles}",
                            '1247px',
                            '977px'
                        ],
                        [
                            "eid73",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${corridors}",
                            '309px',
                            '159px'
                        ],
                        [
                            "eid17",
                            "top",
                            1250,
                            1000,
                            "linear",
                            "${for_more_than}",
                            '-38px',
                            '91px'
                        ],
                        [
                            "eid68",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${concerning}",
                            '-38px',
                            '71px'
                        ],
                        [
                            "eid71",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${concerning}",
                            '0',
                            '1'
                        ],
                        [
                            "eid78",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${miles}",
                            '112px',
                            '114px'
                        ],
                        [
                            "eid4",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${weve}",
                            '-37px',
                            '92px'
                        ],
                        [
                            "eid31",
                            "top",
                            2500,
                            1000,
                            "linear",
                            "${stakeholders}",
                            '251px',
                            '159px'
                        ],
                        [
                            "eid21",
                            "top",
                            1250,
                            1000,
                            "linear",
                            "${hours}",
                            '274px',
                            '131px'
                        ],
                        [
                            "eid25",
                            "top",
                            2500,
                            1000,
                            "linear",
                            "${during}",
                            '-29px',
                            '70px'
                        ],
                        [
                            "eid35",
                            "left",
                            2500,
                            1000,
                            "linear",
                            "${sessions}",
                            '1325px',
                            '631px'
                        ],
                        [
                            "eid76",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${corridors}",
                            '0',
                            '1'
                        ],
                        [
                            "eid41",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${Rectangle2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            2500,
                            1000,
                            "linear",
                            "${sessions}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            2500,
                            1000,
                            "linear",
                            "${during}",
                            '0',
                            '1'
                        ],
                        [
                            "eid102",
                            "left",
                            2500,
                            1000,
                            "linear",
                            "${during}",
                            '659px',
                            '644px'
                        ],
                        [
                            "eid81",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${miles}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15",
                            "left",
                            1250,
                            1000,
                            "linear",
                            "${for_more_than}",
                            '324px',
                            '325px'
                        ],
                        [
                            "eid29",
                            "left",
                            2500,
                            1000,
                            "linear",
                            "${stakeholders}",
                            '599px',
                            '584px'
                        ],
                        [
                            "eid13",
                            "opacity",
                            1250,
                            1000,
                            "linear",
                            "${for_more_than}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("statsvision6_edgeActions.js");
})("EDGE-99197906");
