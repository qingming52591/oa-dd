import {Col, Row, Button, Form, Input, message, Modal, Table, Space, Avatar, Card, Image, Tag} from "antd";
import * as event from "../../event";
import React from 'react'
import {Link} from "react-router-dom";


export const VideoLabel = (props) => {
    let data = [
        {
            "_id": "5fbb6445acdef48582b11429",
            "id": "fa77ec529f6301bc72149db83b0745c3",
            "country": "",
            "socialblade_category": "Entertainment-Tv channel",
            "uploads": "",
            "channel_name": "ON",
            "video_file": "/daypop-data/video/fa77ec529f6301bc72149db83b0745c3.mp4",
            "url": "https://www.youtube.com/user/ONtveg/videos",
            "video_url": "https://www.youtube.com/watch?v=CNA2IrVOZCk",
            "video_download_url": "",
            "title": "\u0643\u0644\u0645\u0629 \u0623\u062e\u064a\u0631\u0629 -\u0648\u0632\u064a\u0631 \u0627\u0644\u0625\u062a\u0635\u0627\u0644\u0627\u062a: \u0625\u0637\u0644\u0627\u0642  \u0645\u0634\u0631\u0648\u0639 \u0643\u0627\u0631\u062a \u0627\u0644\u0641\u0644\u0627\u062d  \u0641\u064a 11 \u0645\u062d\u0627\u0641\u0638\u0629 \u0639\u0644\u0649 \u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u062c\u0645\u0647\u0648\u0631\u064a\u0629 ",
            "create_time": 1606098597727,
            "update_time": 1606116421631,
            "duration": "0:01:51",
            "labels": [],
            "video_img": [],
            "site_name": "www.youtube.com",
            "author": "ON",
            "release_time": "2020-11-22 00:00:00",
            "release_timestamp": 1605974400000,
            "quality": [],
            "category": "Entertainment",
            "content": "\u062a\u0627\u0628\u0639\u0648\u0646\u0627 \u0639\u0644\u0649 .. https://www.youtube.com/ONtveg https://www.facebook.com/ONtv https://www.instagram.com/ONtv https://twitter.com/ONTVEgy tiktok.com/onent",
            "comment_count": 0,
            "view_count": 108,
            "like_count": 2,
            "dislike_count": 0,
            "languages": 0,
            "video_cover": "12f54a76eff8d86d32d5d711e363ac16.jpg",
            "subscriber": "6.11M",
            "task_type": "oa",
            "data_type": "youtube",
            "weight": 121,
            "text_entity": {
                "II_AI": ""
            },
            "text_labels": {
                "day_pop": []
            },
            "text_category": {
                "II_AI": [
                    {
                        "tag": "World",
                        "score": 0.0242295545
                    },
                    {
                        "tag": "MiddleEast",
                        "score": 0.024377374
                    },
                    {
                        "tag": "Sports",
                        "score": 0.3141371608
                    },
                    {
                        "tag": "Health",
                        "score": 0.0
                    },
                    {
                        "tag": "Business",
                        "score": 0.0676671937
                    },
                    {
                        "tag": "Religion",
                        "score": 0.0600718856
                    },
                    {
                        "tag": "RealEstate",
                        "score": 0.0245699473
                    },
                    {
                        "tag": "Tech",
                        "score": 0.03031913
                    },
                    {
                        "tag": "Politics",
                        "score": 0.0277949739
                    },
                    {
                        "tag": "Culture",
                        "score": 0.082560502
                    },
                    {
                        "tag": "Travel",
                        "score": 0.1186566055
                    },
                    {
                        "tag": "Car",
                        "score": 0.1344503313
                    },
                    {
                        "tag": "Environment",
                        "score": 0.0911653787
                    }
                ]
            },
            "video_labels": {
                "II_AI": [
                    {
                        "tag": "chair",
                        "score": 0.6164239005
                    },
                    {
                        "tag": "cloth",
                        "score": 0.9017442611
                    },
                    {
                        "tag": "convention/convention center",
                        "score": 0.8770833865
                    },
                    {
                        "tag": "cooking",
                        "score": 0.7456973065
                    },
                    {
                        "tag": "dry",
                        "score": 0.478605359
                    },
                    {
                        "tag": "indoor",
                        "score": 0.8465902497
                    },
                    {
                        "tag": "people dining",
                        "score": 0.6238728714
                    },
                    {
                        "tag": "people gathering",
                        "score": 0.7767804975
                    },
                    {
                        "tag": "people sitting",
                        "score": 0.6724680859
                    },
                    {
                        "tag": "people walking",
                        "score": 0.5321622337
                    },
                    {
                        "tag": "people watching",
                        "score": 0.8492068161
                    },
                    {
                        "tag": "performance",
                        "score": 0.6051429838
                    },
                    {
                        "tag": "person",
                        "score": 0.9815346937
                    },
                    {
                        "tag": "rubber/plastic",
                        "score": 0.4259938449
                    },
                    {
                        "tag": "rug",
                        "score": 0.7285407284
                    },
                    {
                        "tag": "stressful scene",
                        "score": 0.572039277
                    },
                    {
                        "tag": "television studio",
                        "score": 0.7870797427
                    },
                    {
                        "tag": "tie",
                        "score": 0.8745756857
                    },
                    {
                        "tag": "vase",
                        "score": 0.464098712
                    },
                    {
                        "tag": "wine glass",
                        "score": 0.8078070604
                    }
                ]
            },
            "video_category": {
                "II_AI": []
            },
            "video_nsfw": {},
            "state_finish": 1,
            "video_sum": {
                "type": "II_AI",
                "cover": "12f54a76eff8d86d32d5d711e363ac16.jpg",
                "keyframe": [],
                "summarization": ""
            },
            "cover_path": "https://imagecache2.obs.ap-southeast-3.myhuaweicloud.com/12f54a76eff8d86d32d5d711e363ac16.jpg?Expires=1606120091&AccessKeyId=XRNGGDJRSD4KKMVJURS0&Signature=SWpwWxMuwcbXTdydJz1ei7%2BoSlw%3D",
            "file_path": "https://videocache-daypop.obs.ap-southeast-3.myhuaweicloud.com/fa77ec529f6301bc72149db83b0745c3.mp4?Expires=1606120091&AccessKeyId=2VQ72CFPZDNUNGYNFX4C&Signature=bPOCa6q3H%2BlUorElKjjUIoCTSEo%3D"
        },
        {
            "_id": "5fbb6440acdef48582b0b735",
            "id": "0dd206f9ea900148fda73b94a858ad27",
            "country": "",
            "socialblade_category": "Entertainment-Games",
            "uploads": "",
            "channel_name": "NoughtPointFourLIVE",
            "video_file": "/daypop-data/video/0dd206f9ea900148fda73b94a858ad27.mp4",
            "url": "https://www.youtube.com/c/noughtpointfourlive/videos",
            "video_url": "https://www.youtube.com/watch?v=fUFrRgpxFIs",
            "video_download_url": "",
            "title": "Collecting TRILLIONAIRE SUPER BIKES in GTA 5! ",
            "create_time": 1606099428017,
            "update_time": 1606116416843,
            "duration": "0:16:48",
            "labels": [
                "gta 5",
                "gta v",
                "gta 5 trillionaire",
                "gta 5 money",
                "money",
                "business",
                "trillionaire",
                "billionaire",
                "millionaire",
                "bikes",
                "super bikes",
                "luxury",
                "mansion",
                "gta 5 mansion",
                "gta 5 bikes",
                "gta 5 super bikes",
                "gta 5 collecting",
                "collect",
                "collecting",
                "most expensive",
                "expensive bikes",
                "most expensive bikes",
                "rich",
                "gta 5 noughtpointfourlive",
                "noughtpointfourlive",
                "funny",
                "gaming"
            ],
            "video_img": [],
            "site_name": "www.youtube.com",
            "author": "NoughtPointFourLIVE",
            "release_time": "2020-11-22 00:00:00",
            "release_timestamp": 1605974400000,
            "quality": [],
            "category": "Gaming",
            "content": "TRILLIONAIRE SUPER BIKES in GTA 5! - For MORE GTA 5 Videos, LIKE & Subscribe! \ud83d\ude80 \ud83d\udc8e Become a Channel Member: https://www.youtube.com/user/NoughtPointFourLIVE/join SUBSCRIBE & CLICK THE BELL!  \ud83d\udd25 FOLLOW ME Twitter: https://twitter.com/noughtpointfour Instagram: https://www.instagram.com/freddypye Facebook: https://www.facebook.com/NoughtPointFourLIVE.Videos  \ud83c\udfae MORE VIDEOS: Among Us: https://www.youtube.com/watch?v=HfID2Cdb3k0 GTA 5: https://www.youtube.com/watch?v=fD-KxFw4rtI Random: https://www.youtube.com/watch?v=W12lNN1URXY  Thanks for watching my GTA 5 video! If you want more GTA 5, GTA Online, GTA 5 Funny Moments or GTA 5 Experiment videos, Subscribe!",
            "comment_count": 0,
            "view_count": 96766,
            "like_count": 183,
            "dislike_count": 183,
            "languages": 1,
            "video_cover": "c3b321335529d0b13cca93775a246680.jpg",
            "subscriber": "4.29M",
            "task_type": "oa",
            "data_type": "youtube",
            "weight": 122,
            "text_entity": {
                "II_AI": [
                    "CLICK",
                    "GTA",
                    "GTA 5",
                    "GTA Online",
                    "TRILLIONAIRE",
                    "GTA 5 Experiment",
                    "GTA 5 Funny Moments"
                ]
            },
            "text_labels": {
                "II_AI": [
                    {
                        "gta": 0.9485359107
                    },
                    {
                        "https://www.youtube.com/user/noughtpointfourlive/join subscribe": 0.8607461025
                    },
                    {
                        "trillionaire": 0.8550874057
                    },
                    {
                        "gta online": 0.8315305614
                    },
                    {
                        "https://twitter.com/noughtpointfour instagram": 0.8198449922
                    },
                    {
                        "video": 0.8155301218
                    },
                    {
                        "https://www.instagram.com/freddypye facebook": 0.807691558
                    },
                    {
                        "u0026 click": 0.7982309104
                    },
                    {
                        "twitter": 0.797467183
                    },
                    {
                        "subscribe": 0.7922711379
                    },
                    {
                        "experiment videos": 0.7665499169
                    },
                    {
                        "https://www.facebook.com/noughtpointfourlive.videos": 0.766401377
                    },
                    {
                        "channel member": 0.7569861064
                    },
                    {
                        "funny moments": 0.7552570023
                    },
                    {
                        "bell": 0.751902121
                    }
                ]
            },
            "text_category": {
                "II_AI": [
                    {
                        "tag": "STYLE & BEAUTY",
                        "score": 7.6507811546,
                        "type": "IIAI_CLS"
                    },
                    {
                        "tag": "TRAVEL",
                        "score": 5.8643465042,
                        "type": "IIAI_CLS"
                    },
                    {
                        "tag": "PARENTING",
                        "score": 5.5115451813,
                        "type": "IIAI_CLS"
                    }
                ]
            },
            "video_labels": {
                "II_AI": [
                    {
                        "tag": "TV monitor",
                        "score": 0.3950309982
                    },
                    {
                        "tag": "aeroplane",
                        "score": 0.3529616066
                    },
                    {
                        "tag": "aged/tattered",
                        "score": 0.4577851931
                    },
                    {
                        "tag": "airstrip",
                        "score": 0.4304556968
                    },
                    {
                        "tag": "auditorium",
                        "score": 0.4955914981
                    },
                    {
                        "tag": "bathing",
                        "score": 0.4617329783
                    },
                    {
                        "tag": "bench",
                        "score": 0.3761676765
                    },
                    {
                        "tag": "bicycle",
                        "score": 0.4423296334
                    },
                    {
                        "tag": "bird",
                        "score": 0.3474027526
                    },
                    {
                        "tag": "blacktop",
                        "score": 0.3679712075
                    },
                    {
                        "tag": "boat",
                        "score": 0.349418288
                    },
                    {
                        "tag": "boat deck",
                        "score": 0.4912335938
                    },
                    {
                        "tag": "book",
                        "score": 0.3779325164
                    },
                    {
                        "tag": "bottle",
                        "score": 0.4232399657
                    },
                    {
                        "tag": "brick",
                        "score": 0.4291450191
                    },
                    {
                        "tag": "cable",
                        "score": 0.4069669519
                    },
                    {
                        "tag": "camping",
                        "score": 0.6018429294
                    },
                    {
                        "tag": "chair",
                        "score": 0.3463038936
                    },
                    {
                        "tag": "climbing",
                        "score": 0.4650632248
                    },
                    {
                        "tag": "cloth",
                        "score": 0.3779503407
                    },
                    {
                        "tag": "clouds",
                        "score": 0.4916763741
                    },
                    {
                        "tag": "cluttered space",
                        "score": 0.4616106044
                    },
                    {
                        "tag": "competing",
                        "score": 0.3568488103
                    },
                    {
                        "tag": "constructing buildings",
                        "score": 0.4354471489
                    },
                    {
                        "tag": "cooking",
                        "score": 0.4813517551
                    },
                    {
                        "tag": "cool/freezing",
                        "score": 0.4065113472
                    },
                    {
                        "tag": "crossway",
                        "score": 0.4995605323
                    },
                    {
                        "tag": "cup",
                        "score": 0.2933813891
                    },
                    {
                        "tag": "digging",
                        "score": 0.4881251167
                    },
                    {
                        "tag": "dining table",
                        "score": 0.3127353697
                    },
                    {
                        "tag": "dirty",
                        "score": 0.5921937324
                    },
                    {
                        "tag": "diving",
                        "score": 0.4184808929
                    },
                    {
                        "tag": "dog",
                        "score": 0.4987826553
                    },
                    {
                        "tag": "driving",
                        "score": 0.4887977253
                    },
                    {
                        "tag": "dry",
                        "score": 0.3624773515
                    },
                    {
                        "tag": "eating",
                        "score": 0.4076742699
                    },
                    {
                        "tag": "farming",
                        "score": 0.4965868466
                    },
                    {
                        "tag": "fencing",
                        "score": 0.4369121719
                    },
                    {
                        "tag": "fire hydrant",
                        "score": 0.3868886391
                    },
                    {
                        "tag": "gaming",
                        "score": 0.4379143476
                    },
                    {
                        "tag": "glass",
                        "score": 0.4784762471
                    },
                    {
                        "tag": "grass",
                        "score": 0.4966221691
                    },
                    {
                        "tag": "greenery",
                        "score": 0.4947855131
                    },
                    {
                        "tag": "handbag",
                        "score": 0.2964872157
                    },
                    {
                        "tag": "hiking",
                        "score": 0.4409470338
                    },
                    {
                        "tag": "humid",
                        "score": 0.4881424124
                    },
                    {
                        "tag": "ice",
                        "score": 0.4300267318
                    },
                    {
                        "tag": "ice skater",
                        "score": 0.4683148784
                    },
                    {
                        "tag": "ice skating rink",
                        "score": 0.561020037
                    },
                    {
                        "tag": "indoor",
                        "score": 0.4609672935
                    },
                    {
                        "tag": "instructing",
                        "score": 0.393889442
                    },
                    {
                        "tag": "kasbah",
                        "score": 0.4822932398
                    },
                    {
                        "tag": "knapsack",
                        "score": 0.2875190621
                    },
                    {
                        "tag": "learning",
                        "score": 0.4734857255
                    },
                    {
                        "tag": "marathon",
                        "score": 0.4783455871
                    },
                    {
                        "tag": "marble",
                        "score": 0.4444317776
                    },
                    {
                        "tag": "metal",
                        "score": 0.2588167175
                    },
                    {
                        "tag": "mobile phone",
                        "score": 0.3399057298
                    },
                    {
                        "tag": "motorbike",
                        "score": 0.4697737863
                    },
                    {
                        "tag": "moving stairway",
                        "score": 0.4311398838
                    },
                    {
                        "tag": "natural scene",
                        "score": 0.4399205538
                    },
                    {
                        "tag": "ocean",
                        "score": 0.3936838928
                    },
                    {
                        "tag": "office desk",
                        "score": 0.5878500554
                    },
                    {
                        "tag": "open space",
                        "score": 0.7811370082
                    },
                    {
                        "tag": "outdoor",
                        "score": 0.8320014104
                    },
                    {
                        "tag": "paper",
                        "score": 0.4197004419
                    },
                    {
                        "tag": "park",
                        "score": 0.4472447571
                    },
                    {
                        "tag": "parking meter",
                        "score": 0.291067167
                    },
                    {
                        "tag": "passenger",
                        "score": 0.4671359212
                    },
                    {
                        "tag": "pavement",
                        "score": 0.5518596395
                    },
                    {
                        "tag": "pedestrian",
                        "score": 0.5848123267
                    },
                    {
                        "tag": "people dining",
                        "score": 0.4151356309
                    },
                    {
                        "tag": "people doing business",
                        "score": 0.3212116771
                    },
                    {
                        "tag": "people doing sports",
                        "score": 0.4727447639
                    },
                    {
                        "tag": "people gathering",
                        "score": 0.4689891655
                    },
                    {
                        "tag": "people playing",
                        "score": 0.3740628816
                    },
                    {
                        "tag": "people running",
                        "score": 0.519785819
                    },
                    {
                        "tag": "people sitting",
                        "score": 0.474373909
                    },
                    {
                        "tag": "people skating",
                        "score": 0.4086493752
                    },
                    {
                        "tag": "people standing",
                        "score": 0.368454616
                    },
                    {
                        "tag": "people swimming",
                        "score": 0.5017799829
                    },
                    {
                        "tag": "people waiting in line",
                        "score": 0.4229695012
                    },
                    {
                        "tag": "people walking",
                        "score": 0.4027605298
                    },
                    {
                        "tag": "people watching",
                        "score": 0.4762991281
                    },
                    {
                        "tag": "performance",
                        "score": 0.4126226851
                    },
                    {
                        "tag": "person",
                        "score": 0.9619726543
                    },
                    {
                        "tag": "plant leaves",
                        "score": 0.5209760665
                    },
                    {
                        "tag": "platform",
                        "score": 0.4728561021
                    },
                    {
                        "tag": "polyvinyl chloride/PVC",
                        "score": 0.4592583424
                    },
                    {
                        "tag": "potted plant",
                        "score": 0.4345490578
                    },
                    {
                        "tag": "railing",
                        "score": 0.3870918043
                    },
                    {
                        "tag": "railway",
                        "score": 0.4781398399
                    },
                    {
                        "tag": "reading",
                        "score": 0.489999252
                    },
                    {
                        "tag": "research",
                        "score": 0.4593332687
                    },
                    {
                        "tag": "rubber/plastic",
                        "score": 0.3116812573
                    },
                    {
                        "tag": "rugged places",
                        "score": 0.3032149539
                    },
                    {
                        "tag": "running water",
                        "score": 0.4223706484
                    },
                    {
                        "tag": "rusted",
                        "score": 0.472020603
                    },
                    {
                        "tag": "sailing/boating",
                        "score": 0.4481765374
                    },
                    {
                        "tag": "sand",
                        "score": 0.5021486364
                    },
                    {
                        "tag": "scary scene",
                        "score": 0.4442794287
                    },
                    {
                        "tag": "seaside",
                        "score": 0.4627884547
                    },
                    {
                        "tag": "shopping",
                        "score": 0.4489212928
                    },
                    {
                        "tag": "shrubbery",
                        "score": 0.5031841147
                    },
                    {
                        "tag": "skateboard",
                        "score": 0.3124340831
                    },
                    {
                        "tag": "skating rink",
                        "score": 0.4176301584
                    },
                    {
                        "tag": "ski resort",
                        "score": 0.4852706478
                    },
                    {
                        "tag": "sofa",
                        "score": 0.2454453601
                    },
                    {
                        "tag": "soil",
                        "score": 0.6437603726
                    },
                    {
                        "tag": "soothing scene",
                        "score": 0.4400896305
                    },
                    {
                        "tag": "sports",
                        "score": 0.4819133141
                    },
                    {
                        "tag": "square/plaza",
                        "score": 0.4868573648
                    },
                    {
                        "tag": "stadium",
                        "score": 0.4811993843
                    },
                    {
                        "tag": "still water",
                        "score": 0.4973570563
                    },
                    {
                        "tag": "stone",
                        "score": 0.4906523647
                    },
                    {
                        "tag": "stop sign",
                        "score": 0.3906778856
                    },
                    {
                        "tag": "street",
                        "score": 0.5876581114
                    },
                    {
                        "tag": "stressful scene",
                        "score": 0.3511111412
                    },
                    {
                        "tag": "sunbathing",
                        "score": 0.4385929098
                    },
                    {
                        "tag": "sunlight",
                        "score": 0.6417873345
                    },
                    {
                        "tag": "surfboard",
                        "score": 0.3832894972
                    },
                    {
                        "tag": "terrace from inside",
                        "score": 0.5013911587
                    },
                    {
                        "tag": "tiles",
                        "score": 0.4392023865
                    },
                    {
                        "tag": "traffic light",
                        "score": 0.4305293453
                    },
                    {
                        "tag": "transporting",
                        "score": 0.5000799261
                    },
                    {
                        "tag": "travelling",
                        "score": 0.4173417078
                    },
                    {
                        "tag": "trees",
                        "score": 0.4987219823
                    },
                    {
                        "tag": "truck",
                        "score": 0.3496101285
                    },
                    {
                        "tag": "valise",
                        "score": 0.3256686711
                    },
                    {
                        "tag": "vase",
                        "score": 0.3541065855
                    },
                    {
                        "tag": "vehicle",
                        "score": 0.4886024007
                    },
                    {
                        "tag": "warm",
                        "score": 0.3855153048
                    },
                    {
                        "tag": "water park",
                        "score": 0.50264521
                    },
                    {
                        "tag": "waves",
                        "score": 0.4957052371
                    },
                    {
                        "tag": "wood",
                        "score": 0.4178155806
                    }
                ]
            },
            "video_category": {
                "II_AI": []
            },
            "video_nsfw": {},
            "state_finish": 1,
            "video_sum": {
                "type": "II_AI",
                "cover": "c3b321335529d0b13cca93775a246680.jpg",
                "keyframe": [],
                "summarization": ""
            },
            "cover_path": "https://imagecache2.obs.ap-southeast-3.myhuaweicloud.com/c3b321335529d0b13cca93775a246680.jpg?Expires=1606120091&AccessKeyId=XRNGGDJRSD4KKMVJURS0&Signature=Lt71B3b0SZCSQgIqfQ7gMfarJlo%3D",
            "file_path": "https://videocache-daypop.obs.ap-southeast-3.myhuaweicloud.com/0dd206f9ea900148fda73b94a858ad27.mp4?Expires=1606120091&AccessKeyId=2VQ72CFPZDNUNGYNFX4C&Signature=VTiQXMRaw55Zy7nsNrlfA9VANd8%3D"
        },
        {
            "_id": "5fbb63e8acdef48582aaf775",
            "id": "8cbc7e7a6df3931d73de4c20d170ed91",
            "country": "",
            "socialblade_category": "Complex",
            "uploads": "",
            "channel_name": "BuzzFeed Unsolved Network",
            "video_file": "/daypop-data/video/8cbc7e7a6df3931d73de4c20d170ed91.mp4",
            "url": "https://www.youtube.com/c/buzzfeedunsolvednetwork/videos",
            "video_url": "https://www.youtube.com/watch?v=7pptzcFu2CA",
            "video_download_url": "",
            "title": "The Haunting History of CIA Brainwashing Experiments: MK ULTRA ",
            "create_time": 1606099111254,
            "update_time": 1606116328633,
            "duration": "0:09:03",
            "labels": [
                "buzzfeed",
                "buzzfeedunsolvednetwork",
                "buzzfeed unsolved network",
                "bun",
                "haunting history",
                "mk ultra",
                "cia lsd experiments",
                "cia experiments",
                "stranger things true story",
                "stranger things",
                "stranger things history",
                "US history",
                "psychology",
                "experiments",
                "government testing",
                "government experiments",
                "true story stranger things is based on",
                "creepy history",
                "spooky history",
                "The Haunting History of CIA Brainwashing Experiments: MK ULTRA",
                "brainwashing"
            ],
            "video_img": [],
            "site_name": "www.youtube.com",
            "author": "BuzzFeed Unsolved Network",
            "release_time": "2020-11-22 00:00:00",
            "release_timestamp": 1605974400000,
            "quality": [],
            "category": "People & Blogs",
            "content": "Much has been written about the MK ULTRA experiments, but sometimes the truth is stranger than fiction.   Credits: https://www.buzzfeed.com/bfmp/videos/114010  Subscribe to BuzzFeedVideo: https://bzfd.it/2lVAsJ3  BuzzFeedVideo BuzzFeed\u2019s flagship channel. Sometimes funny, sometimes serious, always shareable. New videos posted daily! To see behind-the-scenes & more, follow us on Instagram @buzzfeedvideo http://bit.ly/2JRRkKU  Love BuzzFeed? Get the merch! BUY NOW: https://goo.gl/gQKF8m  GET MORE BUZZFEED: https://www.buzzfeed.com https://www.buzzfeed.com/videos https://www.youtube.com/buzzfeedvideo https://www.youtube.com/asis https://www.youtube.com/buzzfeedmultiplayer https://www.youtube.com/buzzfeedunsolvednetwork http://youtube.com/buzzfeedceleb https://www.youtube.com/perolike https://www.youtube.com/buzzfeedviolet https://www.youtube.com/goodful https://www.youtube.com/nifty https://www.youtube.com/buzzfeedtasty https://www.youtube.com/bringme  SUBSCRIBE TO BUZZFEED NEWSLETTERS: https://www.buzzfeed.com/newsletters  MUSIC Mysterious Movement_Full Licensed via Warner Chappell Production Music Inc. Cold In The Air_Full Licensed via Warner Chappell Production Music Inc. Psychedelic Cruise_fullmix Licensed via Warner Chappell Production Music Inc.  STILLS Blank screen of old slide projector. pashabo/Getty Images Oversized Four Blank Photo (Clipping Path) petekarici/Getty Images Harry Truman (1884-1972), the 33rd President of th AFP/Getty Images Saar Territory Central Press/Getty Images Testing Gas Masks Keystone/Getty Images Allen Dulles Les Lee/Getty Images German POWs Fred Ramage/Getty Images Exchange Of Power Fox Photos/Getty Images Surrender Keystone/Getty Images Recycled paper texture background in white color Chinnapong/Getty Images Biohazard warning sign on dark background lukbar/Getty Images Ernst Stuhlinger Keystone/Getty Images CIA-HELMS -/Getty Images  VIDEO Footage provided by VideoBlocks (http://vblocks.com/x/BuzzFeedYouTube) Abstract colorful paint reactions. Psychedelic liquid light show, dye patterns in water, oil, paint. Marble background for visual effects, motion graphics. Swirl pattern, ink explosion, kaleidoscope. Multicolor 60s disco oil wheel. Bright trippy wallpaper Mariia Safronova/Getty Images Analysis of blood tests on green screen. Green and red ink reacting on surface. Video depicting bloody stains, spreading disease, research using a scientific microscope at magnification. Paint bloom. Psychedelic light show, ink patterns in water, oil. Mariia Safronova/Getty Images Psychedelic abstract liquid light show, weird ink patterns in water, oil, paint. Organic swirl pattern, dye explosion, kaleidoscope of colors. Bright trippy wallpaper. Marble background for visual effects, motion graphics. Multicolor 60's disco oil wheel Mariia Safronova/Getty Images Stacks of cardboard boxes in warehouse of factory DeSid/Getty Images Drug addicted man lying among confetti putting LSD blotter on tongue, top view Motortion/Getty Images Acid / Lsd Party Loop 4K loshmi33/Getty Images ACID LSD trip 4K loshmi33/Getty Images weird shapes animation yngsa/Getty Images Young Mover Unloads his Cargo Van onto the Sunny Street. In the Urban Area. gorodenkoff/Getty Images Meds pills drugs lsd extasy acid colorful background sequence yngsa/Getty Images Under the influence of drugs Mextech/Getty Images Retro style science Kamilopafilms/Getty Images",
            "comment_count": 0,
            "view_count": 95584,
            "like_count": 97,
            "dislike_count": 97,
            "languages": 1,
            "video_cover": "8d5abfb8a03b92422f14f8c57864f286.jpg",
            "subscriber": "4.31M",
            "task_type": "oa",
            "data_type": "youtube",
            "weight": 122,
            "text_entity": {
                "II_AI": [
                    "Love BuzzFeed",
                    "Blank Photo",
                    "Images ACID LSD",
                    "Les Lee/Getty",
                    "Saar Territory Central Press/Getty",
                    "Love",
                    "Images Meds",
                    "Van",
                    "Harry Truman",
                    "Fred Ramage/Getty",
                    "Chinnapong/Getty Images Biohazard",
                    "Mariia Safronova/Getty Images Stacks",
                    "BuzzFeedVideo",
                    "Instagram",
                    "Allen Dulles",
                    "the Urban Area",
                    "Warner Chappell Production Music Inc",
                    "Images",
                    "Motortion/Getty Images Acid",
                    "Mariia Safronova/Getty Images",
                    "Images Ernst Stuhlinger Keystone/Getty Images",
                    "Mariia Safronova/Getty Images Analysis",
                    "Cargo Van",
                    "Marble",
                    "Gas",
                    "GET",
                    "Music",
                    "Warner Chappell",
                    "Mariia Safronova/Getty",
                    "LSD",
                    "Sunny Street",
                    "AFP/Getty",
                    "Central",
                    "Fred",
                    "Mextech/Getty",
                    "DeSid/Getty",
                    "BuzzFeed",
                    "DeSid/Getty Images",
                    "Loop",
                    "Kamilopafilms/Getty Images",
                    "Street",
                    "Lsd Party Loop",
                    "MK ULTRA",
                    "Warner Chappell Production Music Inc.",
                    "German",
                    "Clipping Path",
                    "Cold",
                    "Urban Area",
                    "Green"
                ]
            },
            "text_labels": {
                "II_AI": [
                    {
                        "getty images recycled paper texture background": 0.9256484725
                    },
                    {
                        "mk ultra experiments": 0.9151043475
                    },
                    {
                        "getty images weird shapes animation yngsa": 0.9076269036
                    },
                    {
                        "getty images testing gas masks keystone": 0.906688886
                    },
                    {
                        "getty images retro style science kamilopafilms": 0.9037497839
                    },
                    {
                        "getty images biohazard": 0.897414412
                    },
                    {
                        "getty images psychedelic abstract liquid light show": 0.8966513453
                    },
                    {
                        "bright trippy wallpaper mariia safronova": 0.886450586
                    },
                    {
                        "getty images german pows fred ramage": 0.8853379695
                    },
                    {
                        "multicolor 60's disco oil wheel mariia safronova": 0.8849463698
                    },
                    {
                        "getty images ernst stuhlinger keystone": 0.8825644569
                    },
                    {
                        "lsd party loop 4k loshmi33": 0.882055904
                    },
                    {
                        "https://bzfd.it/2lvasj3 buzzfeedvideo buzzfeed": 0.8815060963
                    },
                    {
                        "getty images meds pills drugs": 0.8791289137
                    },
                    {
                        "music mysterious movement_full": 0.8790321896
                    }
                ]
            },
            "text_category": {
                "II_AI": [
                    {
                        "tag": "MEDIA",
                        "score": 9.620554924,
                        "type": "IIAI_CLS"
                    },
                    {
                        "tag": "WORLD POST",
                        "score": 6.1017808914,
                        "type": "IIAI_CLS"
                    },
                    {
                        "tag": "ARTS",
                        "score": 3.418586731,
                        "type": "IIAI_CLS"
                    }
                ]
            },
            "video_labels": {
                "II_AI": [
                    {
                        "tag": "TV monitor",
                        "score": 0.3257088915
                    },
                    {
                        "tag": "aged/tattered",
                        "score": 0.4342942158
                    },
                    {
                        "tag": "airstrip",
                        "score": 0.4362192257
                    },
                    {
                        "tag": "ball pond",
                        "score": 0.6487476825
                    },
                    {
                        "tag": "bed",
                        "score": 0.3534006265
                    },
                    {
                        "tag": "blacktop",
                        "score": 0.3517822793
                    },
                    {
                        "tag": "bottle",
                        "score": 0.3822286197
                    },
                    {
                        "tag": "cable",
                        "score": 0.4552100841
                    },
                    {
                        "tag": "cake",
                        "score": 0.3706074032
                    },
                    {
                        "tag": "catacomb",
                        "score": 0.6226467225
                    },
                    {
                        "tag": "chair",
                        "score": 0.3161915529
                    },
                    {
                        "tag": "cloth",
                        "score": 0.3673539962
                    },
                    {
                        "tag": "cluttered space",
                        "score": 0.4763841162
                    },
                    {
                        "tag": "competing",
                        "score": 0.3809135329
                    },
                    {
                        "tag": "convention/convention center",
                        "score": 0.4790568379
                    },
                    {
                        "tag": "cooking",
                        "score": 0.2559572955
                    },
                    {
                        "tag": "cool/freezing",
                        "score": 0.4055255904
                    },
                    {
                        "tag": "cup",
                        "score": 0.3570122189
                    },
                    {
                        "tag": "disco",
                        "score": 0.4267475263
                    },
                    {
                        "tag": "diving",
                        "score": 0.2785876047
                    },
                    {
                        "tag": "dry",
                        "score": 0.2853283125
                    },
                    {
                        "tag": "fashion event",
                        "score": 0.5000637437
                    },
                    {
                        "tag": "flowers",
                        "score": 0.438490732
                    },
                    {
                        "tag": "gaming",
                        "score": 0.4115891984
                    },
                    {
                        "tag": "glass",
                        "score": 0.487170689
                    },
                    {
                        "tag": "greenery",
                        "score": 0.762300785
                    },
                    {
                        "tag": "hallway",
                        "score": 0.8519612368
                    },
                    {
                        "tag": "home theater",
                        "score": 0.4561656626
                    },
                    {
                        "tag": "humid",
                        "score": 0.47527264
                    },
                    {
                        "tag": "igloo",
                        "score": 0.7898246885
                    },
                    {
                        "tag": "indoor",
                        "score": 0.4694773567
                    },
                    {
                        "tag": "instructing",
                        "score": 0.398741869
                    },
                    {
                        "tag": "marble",
                        "score": 0.4998127335
                    },
                    {
                        "tag": "metal",
                        "score": 0.2631262639
                    },
                    {
                        "tag": "model",
                        "score": 0.5057231048
                    },
                    {
                        "tag": "mosque",
                        "score": 0.8434969625
                    },
                    {
                        "tag": "muniment room",
                        "score": 0.6458745468
                    },
                    {
                        "tag": "museum",
                        "score": 0.7290976123
                    },
                    {
                        "tag": "music show",
                        "score": 0.4805344647
                    },
                    {
                        "tag": "natural scene",
                        "score": 0.4433838831
                    },
                    {
                        "tag": "open space",
                        "score": 0.501100038
                    },
                    {
                        "tag": "outdoor",
                        "score": 0.5688432263
                    },
                    {
                        "tag": "passenger",
                        "score": 0.4604924318
                    },
                    {
                        "tag": "people dancing",
                        "score": 0.4941702323
                    },
                    {
                        "tag": "people doing business",
                        "score": 0.3136797074
                    },
                    {
                        "tag": "people doing sports",
                        "score": 0.4885043071
                    },
                    {
                        "tag": "people gathering",
                        "score": 0.4859158689
                    },
                    {
                        "tag": "people playing",
                        "score": 0.3873615878
                    },
                    {
                        "tag": "people sitting",
                        "score": 0.4049163446
                    },
                    {
                        "tag": "people standing",
                        "score": 0.3218280843
                    },
                    {
                        "tag": "people talking/addressing",
                        "score": 0.4913819669
                    },
                    {
                        "tag": "people waiting in line",
                        "score": 0.4701867942
                    },
                    {
                        "tag": "people walking",
                        "score": 0.3170402271
                    },
                    {
                        "tag": "people watching",
                        "score": 0.5072356184
                    },
                    {
                        "tag": "performance",
                        "score": 0.4154846178
                    },
                    {
                        "tag": "person",
                        "score": 0.4945487508
                    },
                    {
                        "tag": "plant leaves",
                        "score": 0.7497467512
                    },
                    {
                        "tag": "platform",
                        "score": 0.472837325
                    },
                    {
                        "tag": "polyvinyl chloride/PVC",
                        "score": 0.4467480953
                    },
                    {
                        "tag": "praying",
                        "score": 0.5028662938
                    },
                    {
                        "tag": "remote",
                        "score": 0.2871536102
                    },
                    {
                        "tag": "research",
                        "score": 0.4428014522
                    },
                    {
                        "tag": "rubber/plastic",
                        "score": 0.3206166798
                    },
                    {
                        "tag": "rug",
                        "score": 0.4642993232
                    },
                    {
                        "tag": "rusted",
                        "score": 0.4696028166
                    },
                    {
                        "tag": "sailing/boating",
                        "score": 0.4600226264
                    },
                    {
                        "tag": "scary scene",
                        "score": 0.4620058983
                    },
                    {
                        "tag": "shopping",
                        "score": 0.4759631313
                    },
                    {
                        "tag": "soothing scene",
                        "score": 0.4881575177
                    },
                    {
                        "tag": "speaker",
                        "score": 0.485560354
                    },
                    {
                        "tag": "sports",
                        "score": 0.5786063361
                    },
                    {
                        "tag": "stage",
                        "score": 0.4325448873
                    },
                    {
                        "tag": "still water",
                        "score": 0.4915121236
                    },
                    {
                        "tag": "stone",
                        "score": 0.4437943161
                    },
                    {
                        "tag": "stressful scene",
                        "score": 0.3537863961
                    },
                    {
                        "tag": "tie",
                        "score": 0.7662386166
                    },
                    {
                        "tag": "train",
                        "score": 0.3178800041
                    },
                    {
                        "tag": "transporting",
                        "score": 0.6091147493
                    },
                    {
                        "tag": "travelling",
                        "score": 0.4226589037
                    },
                    {
                        "tag": "trees",
                        "score": 0.7685748833
                    },
                    {
                        "tag": "vase",
                        "score": 0.3184252109
                    },
                    {
                        "tag": "warm",
                        "score": 0.3859954573
                    },
                    {
                        "tag": "wine glass",
                        "score": 0.3330498912
                    },
                    {
                        "tag": "wood",
                        "score": 0.4266320779
                    }
                ]
            },
            "video_category": {
                "II_AI": []
            },
            "video_nsfw": {},
            "state_finish": 1,
            "video_sum": {
                "type": "II_AI",
                "cover": "8d5abfb8a03b92422f14f8c57864f286.jpg",
                "keyframe": [],
                "summarization": ""
            },
            "cover_path": "https://imagecache2.obs.ap-southeast-3.myhuaweicloud.com/8d5abfb8a03b92422f14f8c57864f286.jpg?Expires=1606120091&AccessKeyId=XRNGGDJRSD4KKMVJURS0&Signature=fE2Ds6MUw0UP7D8WIl4Nwt/za0g%3D",
            "file_path": "https://videocache-daypop.obs.ap-southeast-3.myhuaweicloud.com/8cbc7e7a6df3931d73de4c20d170ed91.mp4?Expires=1606120091&AccessKeyId=2VQ72CFPZDNUNGYNFX4C&Signature=47UeqwOdjluvI%2BbNcFLVOIwI5aQ%3D"
        },
        {
            "_id": "5fbb63c3acdef48582a87354",
            "id": "c32f7f729385335d525319b8deb3f492",
            "country": "",
            "socialblade_category": "Entertainment-Tv channel",
            "uploads": "",
            "channel_name": "ON",
            "video_file": "/daypop-data/video/c32f7f729385335d525319b8deb3f492.mp4",
            "url": "https://www.youtube.com/user/ONtveg/videos",
            "video_url": "https://www.youtube.com/watch?v=KaP4vubcJMI",
            "video_download_url": "",
            "title": "\u0632\u0648\u062c\u0629 \u0633\u0641\u0627\u062d \u0627\u0644\u062c\u064a\u0632\u0629 \u062a\u0643\u0634\u0641 \u0645\u0643\u0627\u0644\u0645\u0627\u062a\u0647 \u0627\u0644\u063a\u0631\u064a\u0628\u0629 \u0648\u0639\u0644\u0627\u0642\u062a\u0647 \u0628\u0623\u062e\u062a\u0647\u0627.. \u0648\u0645\u0641\u0627\u062c\u0623\u0629 \u062c\u062f\u064a\u062f\u0629 \u0633\u062a\u0642\u0644\u0628 \u0645\u0648\u0627\u0632\u064a\u0646 \u0627\u0644\u0642\u0636\u064a\u0629 ",
            "create_time": 1606098556888,
            "update_time": 1606116291120,
            "duration": "0:05:43",
            "labels": [],
            "video_img": [],
            "site_name": "www.youtube.com",
            "author": "ON",
            "release_time": "2020-11-22 00:00:00",
            "release_timestamp": 1605974400000,
            "quality": [],
            "category": "Entertainment",
            "content": "\u062a\u0627\u0628\u0639\u0648\u0646\u0627 \u0639\u0644\u0649 .. https://www.youtube.com/ONtveg https://www.facebook.com/ONtv https://www.instagram.com/ONtv https://twitter.com/ONTVEgy tiktok.com/onent",
            "comment_count": 0,
            "view_count": 9277,
            "like_count": 179,
            "dislike_count": 16,
            "languages": 0,
            "video_cover": "134e09a6aa4fec1c8a8163bd2fdce52a.jpg",
            "subscriber": "6.11M",
            "task_type": "oa",
            "data_type": "youtube",
            "weight": 122,
            "text_entity": {
                "II_AI": ""
            },
            "text_labels": {
                "day_pop": []
            },
            "text_category": {
                "II_AI": [
                    {
                        "tag": "World",
                        "score": 0.0242295545
                    },
                    {
                        "tag": "MiddleEast",
                        "score": 0.024377374
                    },
                    {
                        "tag": "Sports",
                        "score": 0.3141371608
                    },
                    {
                        "tag": "Health",
                        "score": 0.0
                    },
                    {
                        "tag": "Business",
                        "score": 0.0676671937
                    },
                    {
                        "tag": "Religion",
                        "score": 0.0600718856
                    },
                    {
                        "tag": "RealEstate",
                        "score": 0.0245699473
                    },
                    {
                        "tag": "Tech",
                        "score": 0.03031913
                    },
                    {
                        "tag": "Politics",
                        "score": 0.0277949739
                    },
                    {
                        "tag": "Culture",
                        "score": 0.082560502
                    },
                    {
                        "tag": "Travel",
                        "score": 0.1186566055
                    },
                    {
                        "tag": "Car",
                        "score": 0.1344503313
                    },
                    {
                        "tag": "Environment",
                        "score": 0.0911653787
                    }
                ]
            },
            "video_labels": {
                "II_AI": [
                    {
                        "tag": "chair",
                        "score": 0.6223583627
                    },
                    {
                        "tag": "cup",
                        "score": 0.630437126
                    },
                    {
                        "tag": "dry",
                        "score": 0.043991424
                    },
                    {
                        "tag": "glass",
                        "score": 0.0200542642
                    },
                    {
                        "tag": "indoor",
                        "score": 0.934915107
                    },
                    {
                        "tag": "marble",
                        "score": 0.8637557885
                    },
                    {
                        "tag": "metal",
                        "score": 0.0094447569
                    },
                    {
                        "tag": "mobile phone",
                        "score": 0.7303338209
                    },
                    {
                        "tag": "people doing business",
                        "score": 0.0138078646
                    },
                    {
                        "tag": "people walking",
                        "score": 0.0490308335
                    },
                    {
                        "tag": "people watching",
                        "score": 0.7665485755
                    },
                    {
                        "tag": "performance",
                        "score": 0.6298538765
                    },
                    {
                        "tag": "person",
                        "score": 0.9892396071
                    },
                    {
                        "tag": "praying",
                        "score": 0.7547972375
                    },
                    {
                        "tag": "rubber/plastic",
                        "score": 0.0116814282
                    },
                    {
                        "tag": "rug",
                        "score": 0.0683095621
                    },
                    {
                        "tag": "television studio",
                        "score": 0.8512435626
                    },
                    {
                        "tag": "tie",
                        "score": 0.5681045223
                    },
                    {
                        "tag": "wood",
                        "score": 0.6561632495
                    },
                    {
                        "tag": "working",
                        "score": 0.7452418693
                    }
                ]
            },
            "video_category": {
                "II_AI": []
            },
            "video_nsfw": {},
            "state_finish": 1,
            "video_sum": {
                "type": "II_AI",
                "cover": "134e09a6aa4fec1c8a8163bd2fdce52a.jpg",
                "keyframe": [],
                "summarization": ""
            },
            "cover_path": "https://imagecache2.obs.ap-southeast-3.myhuaweicloud.com/134e09a6aa4fec1c8a8163bd2fdce52a.jpg?Expires=1606120091&AccessKeyId=XRNGGDJRSD4KKMVJURS0&Signature=QbZk9j%2BgSj8D6RV%2BH5Ll3TRxnxE%3D",
            "file_path": "https://videocache-daypop.obs.ap-southeast-3.myhuaweicloud.com/c32f7f729385335d525319b8deb3f492.mp4?Expires=1606120091&AccessKeyId=2VQ72CFPZDNUNGYNFX4C&Signature=Aqh4zvbe4p1/HdgCYsLhNbITCMY%3D"
        },
        {
            "_id": "5fbb63beacdef48582a81406",
            "id": "ea27d9e496c79d0be3963bfa54a1b051",
            "country": "",
            "socialblade_category": "Film",
            "uploads": "",
            "channel_name": "Synergy \u062a\u0627\u0645\u0631 \u0645\u0631\u0633\u064a",
            "video_file": "/daypop-data/video/ea27d9e496c79d0be3963bfa54a1b051.mp4",
            "url": "https://www.youtube.com/channel/UCmgbOjLSiYzGJ7GNSnNJLXA/videos",
            "video_url": "https://www.youtube.com/watch?v=u2-i4hkgaEg",
            "video_download_url": "",
            "title": "\u0631\u0627\u0645\u0632 \u0639\u0627\u0648\u0632 \u064a\u0643\u0628\u0631 \u0628\u0633\u0631\u0639\u0629 \u0648\u0645\u0633\u0643 \u062e\u0627\u064a\u0641\u0629 \u0639\u0644\u064a\u0647...\u0648\u0645\u0634\u0643\u0644\u0629 \u062a\u0647\u0627\u0646\u064a \u0643\u0628\u0631\u062a \u0628\u0633\u0628\u0628 \u0633\u0644\u0648\u0649#\u062e\u064a\u0637_\u062d\u0631\u064a\u0631 ",
            "create_time": 1606098918278,
            "update_time": 1606116286069,
            "duration": "0:04:11",
            "labels": [
                "UCmgb",
                "synergy",
                "synergy series",
                "new series",
                "\u0645\u0633\u0644\u0633\u0644\u0627\u062a \u0633\u064a\u0646\u0631\u062c\u0649",
                "\u0633\u0646\u0631\u062c\u0649",
                "\u0645\u0633\u0644\u0633\u0644\u0627\u062a \u062c\u062f\u064a\u062f\u0629 \u0639\u0644\u0649 \u0633\u0646\u0631\u062c\u0649",
                "\u0645\u0633\u0644\u0633\u0644 \u062c\u062f\u064a\u062f",
                "\u0645\u0650\u0633\u0643",
                "\u062d\u0627\u0632\u0645",
                "#\u062e\u064a\u0637_\u062d\u0631\u064a\u0631",
                "\u0627\u0644\u062d\u0644\u0642\u0629 \u0627\u0644\u0631\u0627\u0628\u0639\u0629 \u0639\u0634\u0631",
                "\u0645\u0633\u0644\u0633\u0644 \u062e\u064a\u0637 \u062d\u0631\u064a\u0631",
                "\u062e\u064a\u0637 \u062d\u0631\u064a\u0631",
                "\u0645\u064a \u0639\u0632 \u0627\u0644\u062f\u064a\u0646",
                "KHAIT HAREER",
                "Mai Ezz Eldin",
                "\u0645\u0633\u0644\u0633\u0644 \u062e\u064a\u0637 \u062d\u0631\u064a\u0631 2020",
                "\u062e\u064a\u0637 \u062d\u0631\u064a\u0631 2020",
                "\u0633\u064a\u0646\u0631\u062c\u064a",
                "\u062a\u0627\u0645\u0631 \u0645\u0631\u0633\u064a",
                "\u062e\u064a\u0637 \u062d\u0631\u064a\u0631 \u0627\u0644\u062d\u0644\u0642\u0629 \u0627\u0644\u062e\u0627\u0645\u0633\u0629 \u0639\u0634\u0631",
                "\u0627\u0644\u062d\u0644\u0642\u0629 \u0627\u0644\u062e\u0627\u0645\u0633\u0629 \u0639\u0634\u0631 \u0645\u0633\u0644\u0633\u0644 \u062e\u064a\u0637 \u062d\u0631\u064a\u0631",
                "\u0627\u0644\u062d\u0644\u0642\u0629 15",
                "\u0645\u0649 \u0639\u0632 \u0627\u0644\u062f\u064a\u0646 \u0645\u0633\u0643",
                "\u0645\u0649 \u0639\u0632 \u0627\u0644\u062f\u064a\u0646 \u062e\u064a\u0637 \u062d\u0631\u064a\u0631",
                "\u062e\u064a\u0637 \u062d\u0631\u064a\u0631 \u0627\u0644\u062d\u0644\u0642\u0629 15",
                "\u0645\u062d\u0645\u0648\u062f \u0639\u0628\u062f \u0627\u0644\u0645\u063a\u0646\u0649",
                "\u0646\u064a\u0643\u0648\u0644\u0627 \u0645\u0639\u0648\u0636",
                "\u0633\u0648\u0633\u0646 \u0628\u062f\u0631",
                "\u0647\u0646\u0627\u062f\u064a \u0645\u0647\u0646\u0627",
                "\u0645\u0649 \u0639\u0632 \u0627\u0644\u062f\u064a\u0646"
            ],
            "video_img": [],
            "site_name": "www.youtube.com",
            "author": "Synergy \u062a\u0627\u0645\u0631 \u0645\u0631\u0633\u064a",
            "release_time": "2020-11-22 00:00:00",
            "release_timestamp": 1605974400000,
            "quality": [],
            "category": "Entertainment",
            "content": "\u0631\u0627\u0645\u0632 \u0639\u0627\u0648\u0632 \u064a\u0643\u0628\u0631 \u0628\u0633\u0631\u0639\u0629 \u0648\u0645\u0633\u0643 \u062e\u0627\u064a\u0641\u0629 \u0639\u0644\u064a\u0647...\u0648\u0645\u0634\u0643\u0644\u0629 \u062a\u0647\u0627\u0646\u064a \u0643\u0628\u0631\u062a \u0628\u0633\u0628\u0628 \u0633\u0644\u0648\u0649#\u062e\u064a\u0637_\u062d\u0631\u064a\u0631  \u062c\u0632\u0621 \u0645\u0646 \u0627\u0644\u062d\u0644\u0642\u0629 \u0627\u0644\u062e\u0627\u0645\u0633\u0629 \u0639\u0634\u0631  \u0645\u0646 \u0645\u0633\u0644\u0633\u0644 #\u062e\u064a\u0637_\u062d\u0631\u064a\u0631 \" \u0628\u0637\u0648\u0644\u0629 \u0645\u0649 \u0639\u0632 \u0627\u0644\u062f\u064a\u0646  , \u0645\u062d\u0645\u0648\u062f \u0639\u0628\u062f \u0627\u0644\u0645\u063a\u0646\u0649 , \u0633\u0648\u0633\u0646 \u0628\u062f\u0631 , \u0646\u064a\u0643\u0648\u0644\u0627 \u0645\u0639\u0648\u0636 \u0648\u0647\u0646\u0627\u062f\u064a \u0645\u0647\u0646\u0627\u060c \u0645\u062d\u0645\u062f \u0633\u0644\u064a\u0645\u0627\u0646\u060c \u0635\u0641\u0627\u0621 \u0627\u0644\u0637\u0648\u062e\u0649\u060c \u0648\u0644\u0627\u0621 \u0627\u0644\u0634\u0631\u064a\u0641\u060c \u062d\u0646\u0627\u0646 \u0633\u0644\u064a\u0645\u0627\u0646\u060c \u0623\u062d\u0645\u062f \u0635\u064a\u0627\u0645 \u064a\u0639\u0631\u0636 \u0627\u0644\u0645\u0633\u0644\u0633\u0644 \u0639\u0644\u0649 \u0642\u0646\u0627\u0629 ON \u0627\u0644\u0633\u0627\u0639\u0629 7.45 \u060c \u0648\u064a\u0639\u0627\u062f \u0627\u0644\u0633\u0627\u0639\u0629 1.30 \u0635\u0628\u0627\u062d\u0627\u064b \u06481 \u0638\u0647\u0631\u0627\u064b    #\u062e\u064a\u0637_\u062d\u0631\u064a\u0631 #\u0645\u064a_\u0639\u0632_\u0627\u0644\u062f\u064a\u0646 2020 \u062a\u0623\u0644\u064a\u0641 : \u0645\u062d\u0645\u062f \u0633\u0644\u064a\u0645\u0627\u0646 \u0639\u0628\u062f \u0627\u0644\u0645\u0627\u0644\u0643 \u0625\u062e\u0631\u0627\u062c : \u0625\u0628\u0631\u0627\u0647\u064a\u0645 \u0641\u062e\u0631 \u0625\u0646\u062a\u0627\u062c : Synergy & Aroma - #Synergy \u062a\u0627\u0645\u0631 \u0645\u0631\u0633\u064a \u0634\u0631\u0643\u0629 \u0633\u064a\u0646\u0631\u062c\u0649 \u0644\u0644\u0627\u0646\u062a\u0627\u062c \u0627\u0644\u062a\u0644\u064a\u0641\u0632\u064a\u0648\u0646\u0649 \u0648\u0627\u0644\u0633\u064a\u0646\u0645\u0627\u0626\u0649 \u0648\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062f\u0639\u0627\u064a\u0629 \u0648\u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0648\u0627\u0644\u0639\u0644\u0627\u0642\u0627\u062a \u0627\u0644\u0639\u0627\u0645\u0647     \u0634\u0627\u0647\u062f \u0645\u0642\u0627\u0637\u0639 \u0645\u0633\u0644\u0633\u0644 #\u062e\u064a\u0637_\u062d\u0631\u064a\u0631 : https://bit.ly/3638MFs \u0627\u0634\u062a\u0631\u0643 \u0641\u0649 \u0627\u0644\u0642\u0646\u0627\u0629 \u0627\u0644\u0631\u0633\u0645\u064a\u0629 : http://bit.ly/Synergyofficial      Follow Synergy on Twitter | https://www.Twitter.com/SynergyTamer Facebook | https://www.Facebook.com/SynergyTamer.M Instagram | https://www.Instagram.com/Synergy.TamerMursi Tiktok | https://www.Tiktok.com/@Synergy.TamerMurs",
            "comment_count": 0,
            "view_count": 88062,
            "like_count": 27,
            "dislike_count": 27,
            "languages": 0,
            "video_cover": "9a2ea50286bf7f0dd486cc1ca655c8c3.jpg",
            "subscriber": "4.52M",
            "task_type": "oa",
            "data_type": "youtube",
            "weight": 122,
            "text_entity": {
                "II_AI": ""
            },
            "text_labels": {
                "day_pop": [
                    {
                        "tag": "synergy",
                        "score": 0.2885222948
                    },
                    {
                        "tag": "\u062e\u064a\u0637_\u062d\u0631\u064a\u0631",
                        "score": 0.2509404994
                    },
                    {
                        "tag": "\u0633\u0644\u064a\u0645\u0627\u0646",
                        "score": 0.1911830135
                    },
                    {
                        "tag": "https",
                        "score": 0.1900327645
                    },
                    {
                        "tag": "\u0639\u0628\u062f",
                        "score": 0.158297844
                    },
                    {
                        "tag": "\u0625\u0646\u062a\u0627\u062c",
                        "score": 0.1496309721
                    },
                    {
                        "tag": "\u0644\u0644\u0627\u0646\u062a\u0627\u062c",
                        "score": 0.1496309721
                    },
                    {
                        "tag": "\u0627\u0644\u062e\u0627\u0645\u0633\u0629",
                        "score": 0.1444340786
                    },
                    {
                        "tag": "on \u0627\u0644\u0633\u0627\u0639\u0629",
                        "score": 0.1263155474
                    },
                    {
                        "tag": "\u0645\u062d\u0645\u062f",
                        "score": 0.1202122513
                    },
                    {
                        "tag": "\u0645\u0633\u0644\u0633\u0644",
                        "score": 0.1190829868
                    }
                ]
            },
            "text_category": {
                "II_AI": [
                    {
                        "tag": "World",
                        "score": 0.003726668
                    },
                    {
                        "tag": "MiddleEast",
                        "score": 0.0525463484
                    },
                    {
                        "tag": "Sports",
                        "score": 0.0779917538
                    },
                    {
                        "tag": "Health",
                        "score": 0.0212479252
                    },
                    {
                        "tag": "Business",
                        "score": 0.0735359341
                    },
                    {
                        "tag": "Religion",
                        "score": 0.0236353166
                    },
                    {
                        "tag": "RealEstate",
                        "score": 0.0
                    },
                    {
                        "tag": "Tech",
                        "score": 0.036187984
                    },
                    {
                        "tag": "Politics",
                        "score": 0.019654246
                    },
                    {
                        "tag": "Culture",
                        "score": 0.5128018856
                    },
                    {
                        "tag": "Travel",
                        "score": 0.0890693665
                    },
                    {
                        "tag": "Car",
                        "score": 0.0566192977
                    },
                    {
                        "tag": "Environment",
                        "score": 0.0329833031
                    }
                ]
            },
            "video_labels": {
                "II_AI": [
                    {
                        "tag": "TV monitor",
                        "score": 0.6871311216
                    },
                    {
                        "tag": "aged/tattered",
                        "score": 0.494796186
                    },
                    {
                        "tag": "apple",
                        "score": 0.4397606182
                    },
                    {
                        "tag": "battle scene",
                        "score": 0.740712377
                    },
                    {
                        "tag": "battleground",
                        "score": 0.7409683627
                    },
                    {
                        "tag": "bed",
                        "score": 0.4285441134
                    },
                    {
                        "tag": "book",
                        "score": 0.4507908712
                    },
                    {
                        "tag": "bowl",
                        "score": 0.6342038019
                    },
                    {
                        "tag": "chair",
                        "score": 0.3881361353
                    },
                    {
                        "tag": "cinema",
                        "score": 0.7004715661
                    },
                    {
                        "tag": "cloth",
                        "score": 0.4170364553
                    },
                    {
                        "tag": "convention/convention center",
                        "score": 0.7281504053
                    },
                    {
                        "tag": "cup",
                        "score": 0.4703571446
                    },
                    {
                        "tag": "dining table",
                        "score": 0.4868994042
                    },
                    {
                        "tag": "glass",
                        "score": 0.6134566195
                    },
                    {
                        "tag": "home theater",
                        "score": 0.5685520084
                    },
                    {
                        "tag": "humid",
                        "score": 0.7471388977
                    },
                    {
                        "tag": "indoor",
                        "score": 0.8354918683
                    },
                    {
                        "tag": "natural scene",
                        "score": 0.4983964449
                    },
                    {
                        "tag": "outdoor",
                        "score": 0.5589170131
                    },
                    {
                        "tag": "people doing sports",
                        "score": 0.6203064873
                    },
                    {
                        "tag": "people sitting",
                        "score": 0.5977419713
                    },
                    {
                        "tag": "people watching",
                        "score": 0.540030424
                    },
                    {
                        "tag": "performance",
                        "score": 0.4077813481
                    },
                    {
                        "tag": "person",
                        "score": 0.9507138416
                    },
                    {
                        "tag": "remote",
                        "score": 0.3188616836
                    },
                    {
                        "tag": "scary scene",
                        "score": 0.6621725627
                    },
                    {
                        "tag": "sofa",
                        "score": 0.5335534596
                    },
                    {
                        "tag": "soldier",
                        "score": 0.5097789069
                    },
                    {
                        "tag": "speaker",
                        "score": 0.559732882
                    },
                    {
                        "tag": "stressful scene",
                        "score": 0.40250528
                    },
                    {
                        "tag": "wood",
                        "score": 0.5374870981
                    }
                ]
            },
            "video_category": {
                "II_AI": []
            },
            "video_nsfw": {},
            "state_finish": 1,
            "video_sum": {
                "type": "II_AI",
                "cover": "9a2ea50286bf7f0dd486cc1ca655c8c3.jpg",
                "keyframe": [],
                "summarization": ""
            },
            "cover_path": "https://imagecache2.obs.ap-southeast-3.myhuaweicloud.com/9a2ea50286bf7f0dd486cc1ca655c8c3.jpg?Expires=1606120091&AccessKeyId=XRNGGDJRSD4KKMVJURS0&Signature=8CWjbqDTqMDye9IQZM0xj4BqGxk%3D",
            "file_path": "https://videocache-daypop.obs.ap-southeast-3.myhuaweicloud.com/ea27d9e496c79d0be3963bfa54a1b051.mp4?Expires=1606120091&AccessKeyId=2VQ72CFPZDNUNGYNFX4C&Signature=Bb4j/kB1ohm0KJEHepz5rTaBpIo%3D"
        },
        {
            "_id": "5fbb63b1acdef48582a72815",
            "id": "5eb939da6d1ec20ab321673c0fe38a9b",
            "country": "",
            "socialblade_category": "Films",
            "uploads": "",
            "channel_name": "Insider",
            "video_file": "/daypop-data/video/5eb939da6d1ec20ab321673c0fe38a9b.mp4",
            "url": "https://www.youtube.com/c/thisisinsider/videos/videos",
            "video_url": "https://www.youtube.com/watch?v=VRtTz7w_iDY",
            "video_download_url": "",
            "title": "Pro Acting Coach Breaks Down 12 Batman Villain Performances | Good & Bad Acting ",
            "create_time": 1606100765054,
            "update_time": 1606116273666,
            "duration": "0:24:55",
            "labels": [
                "Insider",
                "ACTING",
                "movies",
                "movies insider",
                "batman",
                "villain",
                "villian",
                "act",
                "movie",
                "film",
                "hollywood",
                "superhero",
                "gotham",
                "bruce wayne",
                "performance",
                "react",
                "reacting",
                "breaking down",
                "rating"
            ],
            "video_img": [],
            "site_name": "www.youtube.com",
            "author": "Insider",
            "release_time": "2020-11-22 00:00:00",
            "release_timestamp": 1605974400000,
            "quality": "144p",
            "category": "Travel & Events",
            "content": "Batman has arguably the best rogues' gallery of any comic-book universe. Hollywood has had its fair share of hits and misses in translating his arch-rivals to the screen. In this episode of \"Good & Bad Acting,\" LA acting coach Anthony Gilardi reacts to 12 of the most iconic live-action Batman villains, reviewing the highs and lows of the actors' performances.  From Adam West's campy 1960s TV series to Christopher Nolan's \"Dark Knight\" trilogy, the timeless appeal of the Batman universe has always been tied in with a colorful array of madmen and criminals. These include one of the most famous villains in comic-book history, the Joker, along with a stacked lineup of equally memorable adversaries, like Catwoman and the Penguin.  So, how does an actor put their own spin on a supervillain as beloved as these \u2014 and in a pantheon that includes the likes of Jack Nicholson, Eartha Kitt, and Heath Ledger? Gilardi breaks that down for us as he watches and critiques four Jokers, two Catwomen, a Riddler, a Penguin, a Scarecrow, and more.  When it comes to building a villain's mythos, many actors make use of what Gilardi calls \"shtick\" \u2014 a character's unique set of mannerisms and quirks, which add another unsettling layer to their presence in any scene. Gilardi looks at how different actors developed their signature Batman villain tics, from Heath Ledger's lip-smacking to Eartha Kitt's Catwoman purr. He breaks down how Kitt used her famous voice and eyes to play up Catwoman's feline nature in the \"Batman\" TV show; how Tom Hardy nailed the Bane voice in \"The Dark Knight Rises\"; and how Margot Robbie gave Harley Quinn a singsong cadence in \"Suicide Squad.\" Gilardo also evaluates cases where actors were less successful with their shtick, from Uma Thurman's take on Poison Ivy in the much maligned \"Batman & Robin\" to Jared Leto's panned turn as the Joker in 2016's \"Suicide Squad.\"  But the best villains are much more than a bundle of creepy affectations and maniacal laughter; they're well-rounded characters, portrayed with complexity and moral ambiguity on screen. Gilardi explains how an actor like Jack Nicholson or Joaquin Phoenix channels their character's backstory into their actions and mannerisms \u2014 and how some of the more divisive performances, like Jim Carrey's Riddler or Danny DeVito's Penguin, tend to fall short in this dimension. Beyond character history, Gilardi looks at how actors establish complex motivation for their villain and convey what makes their characters tick. In \"Batman Begins,\" for example, he examines how Cillian Murphy developed a specific set of behavioral triggers for Dr. Jonathan Crane, the mad scientist known to his victims as the Scarecrow. And in \"The Dark Knight,\" he analyzes how Heath Ledger expressed the nihilism of the Joker through all the minutiae of his performance. Everything, from Ledger's gait, posture, and vocal inflection to the way he slaps on his Joker makeup, expresses the forces of chaos that drive the Clown Prince of Crime.  Gilardi emphasizes the importance of locating the humanity in each of Batman's famous foes, no matter how depraved their actions may be. As a case study, Gilardi evaluates Jack Nicholson's legendary turn as the Joker in 1989's \"Batman\" \u2014 a performance that captures what Gilardi calls \"liberated madness,\" which ultimately serves to humanize the Caped Crusader's main nemesis. He also examines how Joaquin Phoenix's character study in the 2019 standalone film \"Joker\" adds a sympathetic side to the Clown Prince's origins. In particular, Gilardi breaks down the genius of the bathroom scene, an improvised dance that marks the beginning of Arthur Fleck's transformation into antihero.  For more from Anthony Gilardi: https://www.anthonygilardiactingstudio.com/ https://www.instagram.com/anthonygilardiactingstudio/  ------------------------------------------------------  #Batman #Movies #Insider  Insider is great journalism about what passionate people actually want to know. That\u2019s everything from news to food, celebrity to science, politics to sports and all the rest. It\u2019s smart. It\u2019s fearless. It\u2019s fun. We push the boundaries of digital storytelling. Our mission is to inform and inspire.   Subscribe to our channel and visit us at: https://www.insider.com Insider on Facebook: https://www.facebook.com/insider/ Insider on Instagram: https://www.instagram.com/insider/ Insider on Twitter: https://twitter.com/thisisinsider Insider on Snapchat: https://www.snapchat.com/discover/Insider/4020934530 Insider on Amazon Prime: https://www.amazon.com/v/thisisinsider Insider on TikTok: https://www.tiktok.com/@insider Insider on Dailymotion: https://www.dailymotion.com/INSIDER  Pro Acting Coach Breaks Down 12 Batman Villain Performances | Good & Bad Acting",
            "comment_count": 0,
            "view_count": 15035,
            "like_count": 32,
            "dislike_count": 32,
            "languages": 1,
            "video_cover": "be6ece5ccea23f8172372fe145906858.jpg",
            "subscriber": "6.11M",
            "task_type": "oa",
            "data_type": "youtube",
            "weight": 123,
            "text_entity": {
                "II_AI": [
                    "Harley Quinn",
                    "Crime",
                    "Joaquin Phoenix",
                    "Gilardi",
                    "Arthur",
                    "Bad Acting",
                    "Joker",
                    "Arthur Fleck",
                    "Heath Ledger",
                    "Facebook",
                    "Amazon Prime",
                    "Cillian Murphy",
                    "Jared Leto",
                    "TV",
                    "Kitt",
                    "Jim Carrey",
                    "Poison Ivy",
                    "Danny DeVito",
                    "Riddler",
                    "The Dark Knight",
                    "Tom Hardy",
                    "Batman Begins",
                    "Penguin",
                    "Adam",
                    "Jokers",
                    "Adam West",
                    "Margot Robbie",
                    "Scarecrow",
                    "Ledger",
                    "Batman",
                    "Joaquin",
                    "Eartha Kitt",
                    "Gilardo",
                    "Jack Nicholson",
                    "Catwomen",
                    "Uma Thurman",
                    "Christopher Nolan",
                    "Hollywood",
                    "Jonathan Crane",
                    "Clown Prince",
                    "Bane",
                    "Anthony Gilardi",
                    "Clown",
                    "Jonathan",
                    "Catwoman",
                    "Caped Crusader"
                ]
            },
            "text_labels": {
                "II_AI": [
                    {
                        "batman": 0.9642137976
                    },
                    {
                        "book universe": 0.8636655212
                    },
                    {
                        "action batman villains": 0.8622057795
                    },
                    {
                        "rogue": 0.8608815258
                    },
                    {
                        "signature batman villain tics": 0.8504874583
                    },
                    {
                        "batman universe": 0.8230173402
                    },
                    {
                        "catwoman": 0.8219851342
                    },
                    {
                        "coach anthony gilardi": 0.819760948
                    },
                    {
                        "scarecrow": 0.8136596984
                    },
                    {
                        "catwoman purr": 0.8121327121
                    },
                    {
                        "#batman #movies #insider insider": 0.8106310133
                    },
                    {
                        "famous villains": 0.8091765226
                    },
                    {
                        "campy 1960s tv series": 0.8082078559
                    },
                    {
                        "creepy affectations": 0.8066465562
                    },
                    {
                        "villain": 0.8030489256
                    }
                ]
            },
            "text_category": {
                "II_AI": [
                    {
                        "tag": "ENTERTAINMENT",
                        "score": 14.8151569366,
                        "type": "IIAI_CLS"
                    },
                    {
                        "tag": "ARTS",
                        "score": 2.4384236336,
                        "type": "IIAI_CLS"
                    },
                    {
                        "tag": "STYLE",
                        "score": 2.2381916046,
                        "type": "IIAI_CLS"
                    }
                ]
            },
            "video_labels": {
                "II_AI": [
                    {
                        "tag": "TV monitor",
                        "score": 0.6694667669
                    },
                    {
                        "tag": "aged/tattered",
                        "score": 0.4934766106
                    },
                    {
                        "tag": "airstrip",
                        "score": 0.4621775236
                    },
                    {
                        "tag": "aquarium",
                        "score": 0.6161714303
                    },
                    {
                        "tag": "band",
                        "score": 0.7142229426
                    },
                    {
                        "tag": "bird",
                        "score": 0.4712035074
                    },
                    {
                        "tag": "blacktop",
                        "score": 0.3919346216
                    },
                    {
                        "tag": "book",
                        "score": 0.3125336029
                    },
                    {
                        "tag": "bottle",
                        "score": 0.4424247628
                    },
                    {
                        "tag": "bowl",
                        "score": 0.3441090516
                    },
                    {
                        "tag": "brick",
                        "score": 0.4514850867
                    },
                    {
                        "tag": "cameraman",
                        "score": 0.6008067286
                    },
                    {
                        "tag": "cat",
                        "score": 0.4270065304
                    },
                    {
                        "tag": "celebrity",
                        "score": 0.556938547
                    },
                    {
                        "tag": "chair",
                        "score": 0.3485178938
                    },
                    {
                        "tag": "choir",
                        "score": 0.474504233
                    },
                    {
                        "tag": "chorus",
                        "score": 0.4628039021
                    },
                    {
                        "tag": "clean room",
                        "score": 0.5093098068
                    },
                    {
                        "tag": "cloth",
                        "score": 0.6011766578
                    },
                    {
                        "tag": "clothes shop",
                        "score": 0.5821198921
                    },
                    {
                        "tag": "cluttered space",
                        "score": 0.5222262845
                    },
                    {
                        "tag": "competing",
                        "score": 0.4036813876
                    },
                    {
                        "tag": "computer",
                        "score": 0.386204428
                    },
                    {
                        "tag": "convention/convention center",
                        "score": 0.5336104824
                    },
                    {
                        "tag": "cooking",
                        "score": 0.5403781136
                    },
                    {
                        "tag": "cup",
                        "score": 0.3946238284
                    },
                    {
                        "tag": "dining table",
                        "score": 0.3115575666
                    },
                    {
                        "tag": "disco",
                        "score": 0.4809229957
                    },
                    {
                        "tag": "dry",
                        "score": 0.3698081053
                    },
                    {
                        "tag": "eating",
                        "score": 0.4636609979
                    },
                    {
                        "tag": "fire",
                        "score": 0.4646996334
                    },
                    {
                        "tag": "gaming",
                        "score": 0.409909171
                    },
                    {
                        "tag": "glass",
                        "score": 0.5557230313
                    },
                    {
                        "tag": "home theater",
                        "score": 0.5116283674
                    },
                    {
                        "tag": "indoor",
                        "score": 0.8312775468
                    },
                    {
                        "tag": "instructing",
                        "score": 0.4619656127
                    },
                    {
                        "tag": "knapsack",
                        "score": 0.3124449055
                    },
                    {
                        "tag": "mobile phone",
                        "score": 0.3519149173
                    },
                    {
                        "tag": "music director",
                        "score": 0.6471551187
                    },
                    {
                        "tag": "music show",
                        "score": 0.7835322434
                    },
                    {
                        "tag": "natural scene",
                        "score": 0.4822291235
                    },
                    {
                        "tag": "outdoor",
                        "score": 0.5486505441
                    },
                    {
                        "tag": "paper",
                        "score": 0.4889109961
                    },
                    {
                        "tag": "people dining",
                        "score": 0.4719131495
                    },
                    {
                        "tag": "people doing business",
                        "score": 0.3811534506
                    },
                    {
                        "tag": "people doing sports",
                        "score": 0.5287613238
                    },
                    {
                        "tag": "people gathering",
                        "score": 0.5373952832
                    },
                    {
                        "tag": "people playing",
                        "score": 0.4545638454
                    },
                    {
                        "tag": "people sitting",
                        "score": 0.6360965037
                    },
                    {
                        "tag": "people standing",
                        "score": 0.4726222014
                    },
                    {
                        "tag": "people waiting in line",
                        "score": 0.4827189846
                    },
                    {
                        "tag": "people walking",
                        "score": 0.4109161785
                    },
                    {
                        "tag": "people watching",
                        "score": 0.5393592024
                    },
                    {
                        "tag": "people waving",
                        "score": 0.5759677556
                    },
                    {
                        "tag": "performance",
                        "score": 0.9331173287
                    },
                    {
                        "tag": "performer",
                        "score": 0.8791624913
                    },
                    {
                        "tag": "person",
                        "score": 0.7802009405
                    },
                    {
                        "tag": "pet store",
                        "score": 0.5723902862
                    },
                    {
                        "tag": "polyvinyl chloride/PVC",
                        "score": 0.4783999932
                    },
                    {
                        "tag": "praying",
                        "score": 0.444219773
                    },
                    {
                        "tag": "railing",
                        "score": 0.359223469
                    },
                    {
                        "tag": "reading",
                        "score": 0.5622727483
                    },
                    {
                        "tag": "red-carpet event",
                        "score": 0.5271391118
                    },
                    {
                        "tag": "research",
                        "score": 0.5018490366
                    },
                    {
                        "tag": "rubber/plastic",
                        "score": 0.3427565899
                    },
                    {
                        "tag": "rug",
                        "score": 0.561354612
                    },
                    {
                        "tag": "rusted",
                        "score": 0.5952969948
                    },
                    {
                        "tag": "scary scene",
                        "score": 0.4824571699
                    },
                    {
                        "tag": "shopping",
                        "score": 0.4736033037
                    },
                    {
                        "tag": "sofa",
                        "score": 0.408152989
                    },
                    {
                        "tag": "soothing scene",
                        "score": 0.5042193221
                    },
                    {
                        "tag": "sports",
                        "score": 0.5225707668
                    },
                    {
                        "tag": "stadium",
                        "score": 0.5441281391
                    },
                    {
                        "tag": "stage",
                        "score": 0.5000384054
                    },
                    {
                        "tag": "stall",
                        "score": 0.5827918935
                    },
                    {
                        "tag": "stressful scene",
                        "score": 0.3961348113
                    },
                    {
                        "tag": "television studio",
                        "score": 0.5767070195
                    },
                    {
                        "tag": "tie",
                        "score": 0.4475940779
                    },
                    {
                        "tag": "traffic light",
                        "score": 0.351357811
                    },
                    {
                        "tag": "travelling",
                        "score": 0.4576150689
                    },
                    {
                        "tag": "vet",
                        "score": 0.6324105728
                    },
                    {
                        "tag": "warm",
                        "score": 0.4126612071
                    },
                    {
                        "tag": "wine glass",
                        "score": 0.3270301266
                    },
                    {
                        "tag": "wood",
                        "score": 0.4714846244
                    }
                ]
            },
            "video_category": {
                "II_AI": []
            },
            "video_nsfw": {},
            "state_finish": 1,
            "video_sum": {
                "type": "II_AI",
                "cover": "be6ece5ccea23f8172372fe145906858.jpg",
                "keyframe": [],
                "summarization": ""
            },
            "cover_path": "https://imagecache2.obs.ap-southeast-3.myhuaweicloud.com/be6ece5ccea23f8172372fe145906858.jpg?Expires=1606120091&AccessKeyId=XRNGGDJRSD4KKMVJURS0&Signature=bADqJVTzpWUAX1BTumSsu1Qul5o%3D",
            "file_path": "https://videocache-daypop.obs.ap-southeast-3.myhuaweicloud.com/5eb939da6d1ec20ab321673c0fe38a9b.mp4?Expires=1606120091&AccessKeyId=2VQ72CFPZDNUNGYNFX4C&Signature=wFR3eZSUhTtW0z0sJjJddSGCok4%3D"
        },
        {
            "_id": "5fbb6368acdef48582a24937",
            "id": "bf8e302671ee98f920948b491973ebfc",
            "country": "USA",
            "socialblade_category": "Entertainment",
            "uploads": "223",
            "channel_name": "Like Nastya AE",
            "video_file": "/daypop-data/video/bf8e302671ee98f920948b491973ebfc.mp4",
            "url": "https://www.youtube.com/channel/UC3I1iohrGzxep0p8r1Osw3w/videos",
            "video_url": "https://www.youtube.com/watch?v=krpmcJf6uMo",
            "video_download_url": "",
            "title": "\u0646\u0627\u0633\u062a\u064a\u0627 \u0643\u0628\u0631\u062a \u0627\u0644\u0643\u062b\u064a\u0631 ,\u0648\u0627\u0644\u062f\u0647\u0627 \u064a\u0623\u062e\u0630\u0647\u0627 \u0644\u0644\u062a\u0633\u0648\u0642 \u0645\u0644\u0627\u0628\u0633 \u062c\u062f\u064a\u062f\u0629 ",
            "create_time": 1606115791545,
            "update_time": 1606116198634,
            "duration": "0:10:34",
            "labels": [
                "Like Nastya AE",
                "like nastya",
                "stacy",
                "nastya",
                "stacy show",
                "\u062a\u0633\u0648\u0642 \u0627\u0644\u0627\u0637\u0641\u0627\u0644",
                "\u062a\u0631\u0641\u064a\u0647 \u0644\u0644\u0623\u0637\u0641\u0627\u0644",
                "\u0642\u0635\u0635 \u0639\u0631\u0628\u064a\u0629",
                "\u0623\u0644\u0639\u0627\u0628 \u0644\u0644\u0623\u0637\u0641\u0627\u0644",
                "\u0627\u0644\u062a\u0638\u0627\u0647\u0631 \u0628\u0627\u0644\u0644\u0639\u0628",
                "\u0627\u0637\u0641\u0627\u0644 \u064a\u0644\u0639\u0628\u0648\u0646",
                "\u0646\u0627\u0633\u062a\u064a\u0627",
                "\u0646\u0627\u0633\u062a\u064a\u0627 \u0648\u0623\u0628\u064a",
                "\u0645\u0642\u0627\u0637\u0639 \u0641\u064a\u062f\u064a\u0648 \u0644\u0644\u0623\u0637\u0641\u0627\u0644",
                "\u0642\u0635\u0635 \u0645\u0636\u062d\u0643\u0629 \u0644\u0644\u0623\u0637\u0641\u0627\u0644",
                "\u0627\u0644\u0623\u0641\u0636\u0644 \u0644\u0644\u0623\u0637\u0641\u0627\u0644",
                "\u0642\u0635\u0635 \u0627\u0637\u0641\u0627\u0644",
                "\u0627\u0644\u0639\u0627\u0628 \u062a\u0644\u0628\u064a\u0633",
                "\u0623\u062d\u0630\u064a\u0629 \u0623\u0637\u0641\u0627\u0644"
            ],
            "video_img": [],
            "site_name": "www.youtube.com",
            "author": "Like Nastya AE",
            "release_time": "2020-11-22 00:00:00",
            "release_timestamp": 1605974400000,
            "quality": [],
            "category": "Entertainment",
            "content": "\u0646\u0634\u0623\u062a \u0646\u0627\u0633\u062a\u064a\u0627 \u0648\u0630\u0647\u0628\u062a \u0644\u0644\u062a\u0633\u0648\u0642 \u0645\u0639 \u0648\u0627\u0644\u062f\u0647\u0627 \u0644\u0627\u062e\u062a\u064a\u0627\u0631 \u0641\u0633\u0627\u062a\u064a\u0646 \u062c\u062f\u064a\u062f\u0629. \u0643\u0627\u0646\u062a \u0643\u0644 \u0645\u0644\u0627\u0628\u0633\u0647\u0627 \u0642\u0635\u064a\u0631\u0629. \u0641\u064a \u0627\u0644\u0645\u062a\u062c\u0631 \u060c \u0623\u0638\u0647\u0631 \u0644\u0647\u0627 \u0623\u0628\u064a \u0627\u0644\u0643\u062b\u064a\u0631 \u0645\u0646 \u0627\u0644\u0645\u0644\u0627\u0628\u0633 \u060c \u0644\u0643\u0646\u0647\u0627 \u0644\u0645 \u062a\u062d\u0628 \u0627\u0644\u0645\u0644\u0627\u0628\u0633 \u0627\u0644\u0637\u0641\u0648\u0644\u064a\u0629. \u0623\u062e\u064a\u0631\u064b\u0627 \u060c \u0627\u062e\u062a\u0627\u0631\u062a \u0627\u0644\u0645\u0644\u0627\u0628\u0633 \u0648\u0627\u0644\u0623\u062d\u0630\u064a\u0629 \u0627\u0644\u062a\u064a \u062a\u062e\u062a\u0627\u0631\u0647\u0627. \u0642\u0635\u0635 \u0645\u0636\u062d\u0643\u0629 \u0644\u0644\u0623\u0637\u0641\u0627\u0644  INSTAGRAM https://www.instagram.com/likenastya/ Tik Tok - https://vm.tiktok.com/pY1S2D/ Subscribe to Like Nastya AE https://is.gd/YTCwVX",
            "comment_count": 0,
            "view_count": 1584,
            "like_count": 147,
            "dislike_count": 37,
            "languages": 0,
            "video_cover": "22e0e9c11f729ec48d8d8851f6648855.jpg",
            "subscriber": "13.3M",
            "task_type": "oa",
            "data_type": "youtube",
            "weight": 157,
            "text_entity": {
                "II_AI": ""
            },
            "text_labels": {
                "day_pop": [
                    {
                        "tag": "\u0646\u0634\u0623\u062a \u0646\u0627\u0633\u062a\u064a\u0627 \u0648\u0630\u0647\u0628\u062a \u0644\u0644\u062a\u0633\u0648\u0642",
                        "score": 0.4731208159
                    },
                    {
                        "tag": "\u0648\u0627\u0644\u062f\u0647\u0627 \u0644\u0627\u062e\u062a\u064a\u0627\u0631 \u0641\u0633\u0627\u062a\u064a\u0646",
                        "score": 0.0295637891
                    },
                    {
                        "tag": "\u062c\u062f\u064a\u062f\u0629 \u0643\u0627\u0646\u062a",
                        "score": 0.0266074102
                    }
                ]
            },
            "text_category": {
                "II_AI": [
                    {
                        "tag": "World",
                        "score": 0.0072178221
                    },
                    {
                        "tag": "MiddleEast",
                        "score": 0.003015514
                    },
                    {
                        "tag": "Sports",
                        "score": 0.0649419054
                    },
                    {
                        "tag": "Health",
                        "score": 0.0235945527
                    },
                    {
                        "tag": "Business",
                        "score": 0.0482227169
                    },
                    {
                        "tag": "Religion",
                        "score": 0.0711776018
                    },
                    {
                        "tag": "RealEstate",
                        "score": 0.0646761432
                    },
                    {
                        "tag": "Tech",
                        "score": 0.0264103264
                    },
                    {
                        "tag": "Politics",
                        "score": 0.0
                    },
                    {
                        "tag": "Culture",
                        "score": 0.1826755553
                    },
                    {
                        "tag": "Travel",
                        "score": 0.353050828
                    },
                    {
                        "tag": "Car",
                        "score": 0.0618705414
                    },
                    {
                        "tag": "Environment",
                        "score": 0.0931465179
                    }
                ]
            },
            "video_labels": {
                "II_AI": [
                    {
                        "tag": "aged/tattered",
                        "score": 0.3971796436
                    },
                    {
                        "tag": "airstrip",
                        "score": 0.4246953521
                    },
                    {
                        "tag": "apple",
                        "score": 0.282605635
                    },
                    {
                        "tag": "ball pond",
                        "score": 0.4955848722
                    },
                    {
                        "tag": "banana",
                        "score": 0.296370802
                    },
                    {
                        "tag": "beauty parlor",
                        "score": 0.5362605093
                    },
                    {
                        "tag": "bed",
                        "score": 0.3393613352
                    },
                    {
                        "tag": "bench",
                        "score": 0.3100315125
                    },
                    {
                        "tag": "blacktop",
                        "score": 0.3285953135
                    },
                    {
                        "tag": "book",
                        "score": 0.3231626448
                    },
                    {
                        "tag": "bottle",
                        "score": 0.3758162235
                    },
                    {
                        "tag": "bowl",
                        "score": 0.4013922189
                    },
                    {
                        "tag": "cable",
                        "score": 0.3282049813
                    },
                    {
                        "tag": "cake",
                        "score": 0.3239615382
                    },
                    {
                        "tag": "camping",
                        "score": 0.4289004564
                    },
                    {
                        "tag": "carrot",
                        "score": 0.3842965908
                    },
                    {
                        "tag": "cat",
                        "score": 0.4395913114
                    },
                    {
                        "tag": "chair",
                        "score": 0.3229007441
                    },
                    {
                        "tag": "changing room",
                        "score": 0.6043152377
                    },
                    {
                        "tag": "children's room",
                        "score": 0.663131482
                    },
                    {
                        "tag": "clean room",
                        "score": 0.4560561703
                    },
                    {
                        "tag": "clock",
                        "score": 0.3948793636
                    },
                    {
                        "tag": "cloth",
                        "score": 0.4139159627
                    },
                    {
                        "tag": "clothes shop",
                        "score": 0.6243775349
                    },
                    {
                        "tag": "cluttered space",
                        "score": 0.4908647426
                    },
                    {
                        "tag": "competing",
                        "score": 0.3195680513
                    },
                    {
                        "tag": "computer",
                        "score": 0.3294503705
                    },
                    {
                        "tag": "cooking",
                        "score": 0.6147758258
                    },
                    {
                        "tag": "cool/freezing",
                        "score": 0.3605292166
                    },
                    {
                        "tag": "cup",
                        "score": 0.2907543541
                    },
                    {
                        "tag": "department store",
                        "score": 0.4942159156
                    },
                    {
                        "tag": "digging",
                        "score": 0.4113035281
                    },
                    {
                        "tag": "dining table",
                        "score": 0.3635667043
                    },
                    {
                        "tag": "dirty",
                        "score": 0.4898537089
                    },
                    {
                        "tag": "dog",
                        "score": 0.2728597873
                    },
                    {
                        "tag": "driving",
                        "score": 0.4281569371
                    },
                    {
                        "tag": "dry",
                        "score": 0.3461191488
                    },
                    {
                        "tag": "eating",
                        "score": 0.4231458163
                    },
                    {
                        "tag": "fabric store",
                        "score": 0.4740519951
                    },
                    {
                        "tag": "farming",
                        "score": 0.440390045
                    },
                    {
                        "tag": "fashion event",
                        "score": 0.4936274744
                    },
                    {
                        "tag": "fencing",
                        "score": 0.4464424195
                    },
                    {
                        "tag": "fire hydrant",
                        "score": 0.3550796061
                    },
                    {
                        "tag": "fridge",
                        "score": 0.3242871825
                    },
                    {
                        "tag": "frisbee",
                        "score": 0.2990987681
                    },
                    {
                        "tag": "gaming",
                        "score": 0.3757326484
                    },
                    {
                        "tag": "glass",
                        "score": 0.4735525889
                    },
                    {
                        "tag": "grass",
                        "score": 0.4804699693
                    },
                    {
                        "tag": "greenery",
                        "score": 0.5812057632
                    },
                    {
                        "tag": "handbag",
                        "score": 0.3651352972
                    },
                    {
                        "tag": "humid",
                        "score": 0.4091689228
                    },
                    {
                        "tag": "ice skater",
                        "score": 0.4479476076
                    },
                    {
                        "tag": "indoor",
                        "score": 0.4592012939
                    },
                    {
                        "tag": "instructing",
                        "score": 0.4006525603
                    },
                    {
                        "tag": "kite",
                        "score": 0.2563012401
                    },
                    {
                        "tag": "knife",
                        "score": 0.2848084786
                    },
                    {
                        "tag": "learning",
                        "score": 0.4841863956
                    },
                    {
                        "tag": "marble",
                        "score": 0.4456964822
                    },
                    {
                        "tag": "marching",
                        "score": 0.4359928271
                    },
                    {
                        "tag": "medical activity",
                        "score": 0.4588204034
                    },
                    {
                        "tag": "metal",
                        "score": 0.2338269395
                    },
                    {
                        "tag": "mobile phone",
                        "score": 0.3342518672
                    },
                    {
                        "tag": "model",
                        "score": 0.5136374123
                    },
                    {
                        "tag": "natural scene",
                        "score": 0.4160931362
                    },
                    {
                        "tag": "newly-weds",
                        "score": 0.4245850913
                    },
                    {
                        "tag": "open space",
                        "score": 0.4986843416
                    },
                    {
                        "tag": "outdoor",
                        "score": 0.6250661961
                    },
                    {
                        "tag": "oven",
                        "score": 0.2464408769
                    },
                    {
                        "tag": "paper",
                        "score": 0.448574111
                    },
                    {
                        "tag": "park",
                        "score": 0.4824238454
                    },
                    {
                        "tag": "pavement",
                        "score": 0.4555616887
                    },
                    {
                        "tag": "pedestrian",
                        "score": 0.5029500178
                    },
                    {
                        "tag": "people dancing",
                        "score": 0.4670591769
                    },
                    {
                        "tag": "people dining",
                        "score": 0.4469581357
                    },
                    {
                        "tag": "people doing business",
                        "score": 0.3376112046
                    },
                    {
                        "tag": "people doing sports",
                        "score": 0.4538881795
                    },
                    {
                        "tag": "people gathering",
                        "score": 0.4481676645
                    },
                    {
                        "tag": "people playing",
                        "score": 0.3689047323
                    },
                    {
                        "tag": "people running",
                        "score": 0.4801528051
                    },
                    {
                        "tag": "people sitting",
                        "score": 0.4691991567
                    },
                    {
                        "tag": "people skating",
                        "score": 0.3662959557
                    },
                    {
                        "tag": "people standing",
                        "score": 0.3789961645
                    },
                    {
                        "tag": "people waiting in line",
                        "score": 0.4285422741
                    },
                    {
                        "tag": "people walking",
                        "score": 0.3845848205
                    },
                    {
                        "tag": "people watching",
                        "score": 0.5288824082
                    },
                    {
                        "tag": "performance",
                        "score": 0.4268553114
                    },
                    {
                        "tag": "person",
                        "score": 0.8781222452
                    },
                    {
                        "tag": "plant leaves",
                        "score": 0.4956638615
                    },
                    {
                        "tag": "playroom",
                        "score": 0.5282413841
                    },
                    {
                        "tag": "polyvinyl chloride/PVC",
                        "score": 0.4277068169
                    },
                    {
                        "tag": "potted plant",
                        "score": 0.3696076122
                    },
                    {
                        "tag": "praying",
                        "score": 0.4539909636
                    },
                    {
                        "tag": "reading",
                        "score": 0.4642318996
                    },
                    {
                        "tag": "remote",
                        "score": 0.309281169
                    },
                    {
                        "tag": "research",
                        "score": 0.4728015939
                    },
                    {
                        "tag": "ritual",
                        "score": 0.4887528226
                    },
                    {
                        "tag": "rubber/plastic",
                        "score": 0.3358892207
                    },
                    {
                        "tag": "rug",
                        "score": 0.4496018892
                    },
                    {
                        "tag": "rusted",
                        "score": 0.4741380054
                    },
                    {
                        "tag": "sand",
                        "score": 0.4406129329
                    },
                    {
                        "tag": "scissors",
                        "score": 0.4838424509
                    },
                    {
                        "tag": "shoe shop",
                        "score": 0.5779528607
                    },
                    {
                        "tag": "shopping",
                        "score": 0.4719693081
                    },
                    {
                        "tag": "shopping centre",
                        "score": 0.4643915152
                    },
                    {
                        "tag": "shrubbery",
                        "score": 0.4856736284
                    },
                    {
                        "tag": "sink",
                        "score": 0.2660468649
                    },
                    {
                        "tag": "skateboard",
                        "score": 0.3119967857
                    },
                    {
                        "tag": "skating rink",
                        "score": 0.3588915926
                    },
                    {
                        "tag": "soil",
                        "score": 0.4943131961
                    },
                    {
                        "tag": "soothing scene",
                        "score": 0.4434228218
                    },
                    {
                        "tag": "spoon",
                        "score": 0.2530899769
                    },
                    {
                        "tag": "sports",
                        "score": 0.4337665589
                    },
                    {
                        "tag": "sports ball",
                        "score": 0.2652895766
                    },
                    {
                        "tag": "square/plaza",
                        "score": 0.4504206663
                    },
                    {
                        "tag": "stadium",
                        "score": 0.4488667548
                    },
                    {
                        "tag": "stop sign",
                        "score": 0.365559312
                    },
                    {
                        "tag": "street",
                        "score": 0.4106136015
                    },
                    {
                        "tag": "stressful scene",
                        "score": 0.3484096315
                    },
                    {
                        "tag": "sunlight",
                        "score": 0.4776471762
                    },
                    {
                        "tag": "surfboard",
                        "score": 0.2694662529
                    },
                    {
                        "tag": "teddy bear",
                        "score": 0.3177103409
                    },
                    {
                        "tag": "tidying",
                        "score": 0.4152740097
                    },
                    {
                        "tag": "tie",
                        "score": 0.3275573782
                    },
                    {
                        "tag": "tiles",
                        "score": 0.4316962787
                    },
                    {
                        "tag": "toothbrush",
                        "score": 0.30826669
                    },
                    {
                        "tag": "topiary garden",
                        "score": 0.6549256677
                    },
                    {
                        "tag": "transporting",
                        "score": 0.4279675419
                    },
                    {
                        "tag": "travelling",
                        "score": 0.4160664057
                    },
                    {
                        "tag": "trees",
                        "score": 0.4730811293
                    },
                    {
                        "tag": "truck",
                        "score": 0.2612226591
                    },
                    {
                        "tag": "vase",
                        "score": 0.3799977323
                    },
                    {
                        "tag": "vehicle",
                        "score": 0.3551048568
                    },
                    {
                        "tag": "warm",
                        "score": 0.3807921931
                    },
                    {
                        "tag": "wedding",
                        "score": 0.4233791036
                    },
                    {
                        "tag": "wood",
                        "score": 0.417618443
                    }
                ]
            },
            "video_category": {
                "II_AI": []
            },
            "video_nsfw": {},
            "state_finish": 1,
            "video_sum": {
                "type": "II_AI",
                "cover": "22e0e9c11f729ec48d8d8851f6648855.jpg",
                "keyframe": [],
                "summarization": ""
            },
            "cover_path": "https://imagecache2.obs.ap-southeast-3.myhuaweicloud.com/22e0e9c11f729ec48d8d8851f6648855.jpg?Expires=1606120091&AccessKeyId=XRNGGDJRSD4KKMVJURS0&Signature=TJv4kCu3jwNoyMUNGs51F6lQhZk%3D",
            "file_path": "https://videocache-daypop.obs.ap-southeast-3.myhuaweicloud.com/bf8e302671ee98f920948b491973ebfc.mp4?Expires=1606120091&AccessKeyId=2VQ72CFPZDNUNGYNFX4C&Signature=%2BEbIphJCbLwSONcak7nsaUeGBN0%3D"
        },
        {
            "_id": "5fbb6316acdef485829ce71d",
            "id": "7da4ec6b0d6f809427dc7c3a1e25f74b",
            "country": "USA",
            "socialblade_category": "Entertainment",
            "uploads": "709",
            "channel_name": "\u273f Kids Diana Show",
            "video_file": "/daypop-data/video/7da4ec6b0d6f809427dc7c3a1e25f74b.mp4",
            "url": "https://www.youtube.com/c/KidsDianaShow/videos",
            "video_url": "https://www.youtube.com/watch?v=sygeaLT27oc",
            "video_download_url": "",
            "title": "Diana and Roma play with Thomas & Friends toys for kids ",
            "create_time": 1606115712139,
            "update_time": 1606116118558,
            "duration": "0:10:39",
            "labels": [
                "diana and roma",
                "diana",
                "roma and diana",
                "cartoon",
                "diana y roma",
                "roma",
                "thomas & friends",
                "thomas the train videos",
                "thomas the train engine",
                "thomas and friends toys",
                "thomas and friends",
                "thomas",
                "thomas the tank engine",
                "trains",
                "thomas the train",
                "videos for kids",
                "thomas train",
                "kids toys",
                "toys",
                "toy",
                "toys for kids",
                "kids diana show"
            ],
            "video_img": [],
            "site_name": "www.youtube.com",
            "author": "\u273f Kids Diana Show",
            "release_time": "2020-11-22 00:00:00",
            "release_timestamp": 1605974400000,
            "quality": [],
            "category": "Entertainment",
            "content": "This is a paid advertisement for Fisher-Price. Parents, check out the Thomas & Friends\u00ae Talking Thomas & Percy Train Set.This highly detailed playset features favorite places from the island of Sodor, including the Vicarstown Bridge, the Railyard, the Brendam docks, and Blue Mountain. It also includes motorized Thomas and Percy train engines who recognize and talk to each other when they meet on the track! Kid-controlled track switches and a control panel allow little engineers to stop engines for side-by-side interactions and control which way they go. Available at Walmart, Amazon, or Target. Sets and extra trains sold separately.  Monkeys have escaped from the Sodor Animal Park and it\u2019s up to Thomas and your little conductor to get them back home. This set includes a motorized Thomas train engine, 3 monkey figures, a crate of bananas, and plenty of places to monkey around! This set is available at Target. #ThomasandFriends #Thomas75 #ad  Subscribe to Kids Diana Show - http://bit.ly/2k7NrSx https://www.instagram.com/kidsdianashow/",
            "comment_count": 0,
            "view_count": 2871,
            "like_count": 223,
            "dislike_count": 106,
            "languages": 1,
            "video_cover": "ed73148e88425a655579d93b55c9b6ea.jpg",
            "subscriber": "69.5M",
            "task_type": "oa",
            "data_type": "youtube",
            "weight": 438,
            "text_entity": {
                "II_AI": [
                    "Percy Train Set.This",
                    "Target",
                    "Fisher-Price",
                    "Blue Mountain",
                    "It",
                    "Sodor Animal Park",
                    "Sodor",
                    "Brendam",
                    "Amazon",
                    "Railyard",
                    "Percy",
                    "Park",
                    "the Vicarstown Bridge",
                    "Walmart",
                    "Kids Diana Show",
                    "Thomas",
                    "Vicarstown Bridge",
                    "the Sodor Animal Park"
                ]
            },
            "text_labels": {
                "II_AI": [
                    {
                        "u0026 percy train set.this": 0.8681734865
                    },
                    {
                        "fisher": 0.8556016712
                    },
                    {
                        "percy train engines": 0.8481901951
                    },
                    {
                        "advertisement": 0.828156353
                    },
                    {
                        "vicarstown bridge": 0.815328112
                    },
                    {
                        "brendam docks": 0.8123447584
                    },
                    {
                        "thomas": 0.8061236667
                    },
                    {
                        "#thomasandfriends #thomas75 #ad subscribe": 0.8007821442
                    },
                    {
                        "detailed playset": 0.8000306208
                    },
                    {
                        "thomas train engine": 0.7985670966
                    },
                    {
                        "price": 0.779406965
                    },
                    {
                        "railyard": 0.7775135224
                    },
                    {
                        "sodor": 0.7765825397
                    },
                    {
                        "parent": 0.7743915538
                    },
                    {
                        "kids diana show": 0.7743898156
                    }
                ]
            },
            "text_category": {
                "II_AI": [
                    {
                        "tag": "PARENTS",
                        "score": 9.0670986176,
                        "type": "IIAI_CLS"
                    },
                    {
                        "tag": "PARENTING",
                        "score": 7.5095806122,
                        "type": "IIAI_CLS"
                    },
                    {
                        "tag": "TRAVEL",
                        "score": 5.1608638763,
                        "type": "IIAI_CLS"
                    }
                ]
            },
            "video_labels": {
                "II_AI": [
                    {
                        "tag": "aged/tattered",
                        "score": 0.4761578464
                    },
                    {
                        "tag": "airstrip",
                        "score": 0.4813774176
                    },
                    {
                        "tag": "banana",
                        "score": 0.3866047093
                    },
                    {
                        "tag": "bed",
                        "score": 0.3791676249
                    },
                    {
                        "tag": "bench",
                        "score": 0.3291183875
                    },
                    {
                        "tag": "bird",
                        "score": 0.3618507107
                    },
                    {
                        "tag": "boat",
                        "score": 0.358181023
                    },
                    {
                        "tag": "book",
                        "score": 0.3307944385
                    },
                    {
                        "tag": "bottle",
                        "score": 0.3026726567
                    },
                    {
                        "tag": "bowl",
                        "score": 0.2916489615
                    },
                    {
                        "tag": "brick",
                        "score": 0.4854297767
                    },
                    {
                        "tag": "cabin in an airplane",
                        "score": 0.5244887446
                    },
                    {
                        "tag": "cable",
                        "score": 0.4434493054
                    },
                    {
                        "tag": "cake",
                        "score": 0.3440325164
                    },
                    {
                        "tag": "chair",
                        "score": 0.3577528765
                    },
                    {
                        "tag": "children's room",
                        "score": 0.6509531038
                    },
                    {
                        "tag": "clean room",
                        "score": 0.5003484428
                    },
                    {
                        "tag": "climbing",
                        "score": 0.4775815304
                    },
                    {
                        "tag": "cloth",
                        "score": 0.4457604072
                    },
                    {
                        "tag": "clouds",
                        "score": 0.4795644881
                    },
                    {
                        "tag": "cluttered space",
                        "score": 0.524807286
                    },
                    {
                        "tag": "competing",
                        "score": 0.3836042101
                    },
                    {
                        "tag": "computer",
                        "score": 0.312016212
                    },
                    {
                        "tag": "convention/convention center",
                        "score": 0.5380704237
                    },
                    {
                        "tag": "cooking",
                        "score": 0.6740069912
                    },
                    {
                        "tag": "cool/freezing",
                        "score": 0.4041077315
                    },
                    {
                        "tag": "dining table",
                        "score": 0.2940065212
                    },
                    {
                        "tag": "dirty",
                        "score": 0.4772334619
                    },
                    {
                        "tag": "dog",
                        "score": 0.3763790843
                    },
                    {
                        "tag": "driving",
                        "score": 0.4933513706
                    },
                    {
                        "tag": "dry",
                        "score": 0.3081623712
                    },
                    {
                        "tag": "eating",
                        "score": 0.4422687345
                    },
                    {
                        "tag": "fashion event",
                        "score": 0.5800500327
                    },
                    {
                        "tag": "fridge",
                        "score": 0.3413198346
                    },
                    {
                        "tag": "gaming",
                        "score": 0.4181684998
                    },
                    {
                        "tag": "glass",
                        "score": 0.5695486688
                    },
                    {
                        "tag": "grass",
                        "score": 0.5208533988
                    },
                    {
                        "tag": "handbag",
                        "score": 0.4342007187
                    },
                    {
                        "tag": "humid",
                        "score": 0.4657994496
                    },
                    {
                        "tag": "ice skater",
                        "score": 0.4006164209
                    },
                    {
                        "tag": "igloo",
                        "score": 0.7472868825
                    },
                    {
                        "tag": "indoor",
                        "score": 0.4923857348
                    },
                    {
                        "tag": "instructing",
                        "score": 0.4462483295
                    },
                    {
                        "tag": "keyboard",
                        "score": 0.3998996468
                    },
                    {
                        "tag": "knife",
                        "score": 0.3730476363
                    },
                    {
                        "tag": "learning",
                        "score": 0.484641457
                    },
                    {
                        "tag": "marble",
                        "score": 0.4913143738
                    },
                    {
                        "tag": "marching",
                        "score": 0.4200150692
                    },
                    {
                        "tag": "medical activity",
                        "score": 0.5111708134
                    },
                    {
                        "tag": "metal",
                        "score": 0.2746012174
                    },
                    {
                        "tag": "microwave",
                        "score": 0.462603108
                    },
                    {
                        "tag": "mobile phone",
                        "score": 0.3315089258
                    },
                    {
                        "tag": "model",
                        "score": 0.5274424158
                    },
                    {
                        "tag": "open space",
                        "score": 0.5259398445
                    },
                    {
                        "tag": "outdoor",
                        "score": 0.7897835886
                    },
                    {
                        "tag": "oven",
                        "score": 0.345101012
                    },
                    {
                        "tag": "paper",
                        "score": 0.4781807115
                    },
                    {
                        "tag": "passenger",
                        "score": 0.5454876134
                    },
                    {
                        "tag": "pavement",
                        "score": 0.4722023818
                    },
                    {
                        "tag": "pedestrian",
                        "score": 0.4263720625
                    },
                    {
                        "tag": "people dining",
                        "score": 0.4605523275
                    },
                    {
                        "tag": "people doing business",
                        "score": 0.3628435441
                    },
                    {
                        "tag": "people doing sports",
                        "score": 0.4913854788
                    },
                    {
                        "tag": "people gathering",
                        "score": 0.545252305
                    },
                    {
                        "tag": "people playing",
                        "score": 0.4112670324
                    },
                    {
                        "tag": "people sitting",
                        "score": 0.42529204
                    },
                    {
                        "tag": "people skating",
                        "score": 0.4320126018
                    },
                    {
                        "tag": "people standing",
                        "score": 0.3428427626
                    },
                    {
                        "tag": "people swimming",
                        "score": 0.4303591825
                    },
                    {
                        "tag": "people talking/addressing",
                        "score": 0.5281201976
                    },
                    {
                        "tag": "people waiting in line",
                        "score": 0.477924386
                    },
                    {
                        "tag": "people walking",
                        "score": 0.342411193
                    },
                    {
                        "tag": "people watching",
                        "score": 0.5165047667
                    },
                    {
                        "tag": "performance",
                        "score": 0.4428850179
                    },
                    {
                        "tag": "person",
                        "score": 0.6522838184
                    },
                    {
                        "tag": "playground",
                        "score": 0.6779986918
                    },
                    {
                        "tag": "playroom",
                        "score": 0.543751693
                    },
                    {
                        "tag": "polyvinyl chloride/PVC",
                        "score": 0.4660220206
                    },
                    {
                        "tag": "praying",
                        "score": 0.5214094216
                    },
                    {
                        "tag": "railing",
                        "score": 0.3627082201
                    },
                    {
                        "tag": "reading",
                        "score": 0.5144546573
                    },
                    {
                        "tag": "research",
                        "score": 0.5018406344
                    },
                    {
                        "tag": "ritual",
                        "score": 0.4931074938
                    },
                    {
                        "tag": "rubber/plastic",
                        "score": 0.3723423922
                    },
                    {
                        "tag": "rug",
                        "score": 0.4966949477
                    },
                    {
                        "tag": "rusted",
                        "score": 0.4942844557
                    },
                    {
                        "tag": "sand",
                        "score": 0.4849215312
                    },
                    {
                        "tag": "sandbox",
                        "score": 0.8216343069
                    },
                    {
                        "tag": "scary scene",
                        "score": 0.4413537029
                    },
                    {
                        "tag": "seaside",
                        "score": 0.4562277906
                    },
                    {
                        "tag": "shopping",
                        "score": 0.5047082451
                    },
                    {
                        "tag": "skating rink",
                        "score": 0.4163053259
                    },
                    {
                        "tag": "snow",
                        "score": 0.4973440928
                    },
                    {
                        "tag": "sofa",
                        "score": 0.4230146445
                    },
                    {
                        "tag": "soil",
                        "score": 0.5231180069
                    },
                    {
                        "tag": "soothing scene",
                        "score": 0.4934525067
                    },
                    {
                        "tag": "speaker",
                        "score": 0.4921252622
                    },
                    {
                        "tag": "sports",
                        "score": 0.4823437011
                    },
                    {
                        "tag": "square/plaza",
                        "score": 0.5048661674
                    },
                    {
                        "tag": "stadium",
                        "score": 0.5021823716
                    },
                    {
                        "tag": "still water",
                        "score": 0.5004160504
                    },
                    {
                        "tag": "stone",
                        "score": 0.4179763102
                    },
                    {
                        "tag": "street",
                        "score": 0.4621810737
                    },
                    {
                        "tag": "stressful scene",
                        "score": 0.3775159141
                    },
                    {
                        "tag": "sunlight",
                        "score": 0.5097723225
                    },
                    {
                        "tag": "teddy bear",
                        "score": 0.2937163238
                    },
                    {
                        "tag": "tidying",
                        "score": 0.4797581524
                    },
                    {
                        "tag": "tiles",
                        "score": 0.4674854124
                    },
                    {
                        "tag": "toothbrush",
                        "score": 0.3616995765
                    },
                    {
                        "tag": "toyshop",
                        "score": 0.7569791557
                    },
                    {
                        "tag": "train",
                        "score": 0.337902598
                    },
                    {
                        "tag": "transporting",
                        "score": 0.506552408
                    },
                    {
                        "tag": "travelling",
                        "score": 0.4474293628
                    },
                    {
                        "tag": "truck",
                        "score": 0.3107174261
                    },
                    {
                        "tag": "valise",
                        "score": 0.3019017105
                    },
                    {
                        "tag": "vehicle",
                        "score": 0.3907577754
                    },
                    {
                        "tag": "warm",
                        "score": 0.4029716894
                    },
                    {
                        "tag": "wood",
                        "score": 0.460431605
                    }
                ]
            },
            "video_category": {
                "II_AI": []
            },
            "video_nsfw": {},
            "state_finish": 1,
            "video_sum": {
                "type": "II_AI",
                "cover": "ed73148e88425a655579d93b55c9b6ea.jpg",
                "keyframe": [],
                "summarization": ""
            },
            "cover_path": "https://imagecache2.obs.ap-southeast-3.myhuaweicloud.com/ed73148e88425a655579d93b55c9b6ea.jpg?Expires=1606120091&AccessKeyId=XRNGGDJRSD4KKMVJURS0&Signature=Oscl/3pE6uFyany/nj/K5KEBfgQ%3D",
            "file_path": "https://videocache-daypop.obs.ap-southeast-3.myhuaweicloud.com/7da4ec6b0d6f809427dc7c3a1e25f74b.mp4?Expires=1606120091&AccessKeyId=2VQ72CFPZDNUNGYNFX4C&Signature=RPCYAksmEfAQSW78F5h60Y04PBE%3D"
        },
        {
            "_id": "5fbb62c4acdef485829742ca",
            "id": "5bc05a9db3536c5336b28bd4c1738602",
            "country": "",
            "socialblade_category": "",
            "video_file": "/daypop-data/video/5bc05a9db3536c5336b28bd4c1738602.mp4",
            "url": "https://www.youtube.com/user/arabianbusiness/videos",
            "video_url": "https://www.youtube.com/watch?v=diH9NofLQR0",
            "video_download_url": "",
            "title": "Here's why space tourism could soon be a reality in Dubai ",
            "create_time": 1606115744551,
            "update_time": 1606116036297,
            "duration": "0:00:54",
            "labels": [
                "EOS-X Space",
                "Dubai Tourism",
                "global space hub",
                "Virgin Galactic",
                "Blue Origin",
                "SpaceX",
                "space tourism"
            ],
            "video_img": [],
            "site_name": "www.youtube.com",
            "author": "Arabian Business",
            "release_time": "2020-11-22 00:00:00",
            "release_timestamp": 1605974400000,
            "quality": [],
            "category": "Science & Technology",
            "content": "#Dubai could become part of the #SpaceTourism  revolution as early as 2023 according to Kemel Kharbachi the CEO of EOS-X Space.  Read more: https://www.arabianbusiness.com/technology/454931-why-space-tourism-from-dubai-could-be-reality-by-2023  Website: http://www.arabianbusiness.com/  Like Us on Facebook: https://www.facebook.com/ArabianBusiness Follow Us on Twitter: https://twitter.com/ArabianBusiness Follow Us on Instagram: https://www.instagram.com/arabianbusiness/ Follow Us on LinkedIn: https://ae.linkedin.com/company/arabian-business  Subscribe to our Youtube Channel for Business News and Events in the Middle East Region: https://www.youtube.com/user/arabianbusiness/featured?sub_confirmation=1",
            "comment_count": 0,
            "view_count": 6,
            "like_count": 1,
            "dislike_count": 0,
            "languages": 1,
            "video_cover": "3c37da08ac18decd18032bda4ea949fb.jpg",
            "subscriber": "35.7K",
            "task_type": "news",
            "recommond": 1,
            "weight": 7090,
            "data_type": "youtube",
            "text_entity": {
                "II_AI": [
                    "Us",
                    "EOS-X Space",
                    "Dubai",
                    "CEO",
                    "Kemel Kharbachi",
                    "Middle East Region"
                ]
            },
            "text_labels": {
                "II_AI": [
                    {
                        "#dubai": 0.8803142588
                    },
                    {
                        "https://www.facebook.com/arabianbusiness": 0.8732244307
                    },
                    {
                        "https://twitter.com/arabianbusiness": 0.8696048453
                    },
                    {
                        "http://www.arabianbusiness.com/": 0.843942301
                    },
                    {
                        "linkedin": 0.8354954544
                    },
                    {
                        "twitter": 0.8351709415
                    },
                    {
                        "facebook": 0.8323269076
                    },
                    {
                        "https://www.instagram.com/arabianbusiness/": 0.8248535698
                    },
                    {
                        "#spacetourism revolution": 0.8196214214
                    },
                    {
                        "website": 0.8146881863
                    },
                    {
                        "https://ae.linkedin.com/company/arabian-business": 0.8135561755
                    },
                    {
                        "instagram": 0.8087366378
                    },
                    {
                        "kemel kharbachi": 0.80867374
                    },
                    {
                        "youtube channel": 0.8005141824
                    },
                    {
                        "eos": 0.7987338483
                    }
                ]
            },
            "text_category": {
                "II_AI": [
                    {
                        "tag": "TRAVEL",
                        "score": 12.089012146,
                        "type": "IIAI_CLS"
                    },
                    {
                        "tag": "WORLD POST",
                        "score": 7.6285209656,
                        "type": "IIAI_CLS"
                    },
                    {
                        "tag": "GREEN",
                        "score": 3.6326234341,
                        "type": "IIAI_CLS"
                    }
                ]
            },
            "video_labels": {
                "II_AI": [
                    {
                        "tag": "aeroplane",
                        "score": 0.353253511
                    },
                    {
                        "tag": "cloth",
                        "score": 0.4069380256
                    },
                    {
                        "tag": "clouds",
                        "score": 0.7473226936
                    },
                    {
                        "tag": "cluttered space",
                        "score": 0.4734229845
                    },
                    {
                        "tag": "competing",
                        "score": 0.4069569472
                    },
                    {
                        "tag": "convention/convention center",
                        "score": 0.7987276001
                    },
                    {
                        "tag": "cool/freezing",
                        "score": 0.5998075615
                    },
                    {
                        "tag": "diving",
                        "score": 0.3597615673
                    },
                    {
                        "tag": "dry",
                        "score": 0.6054409271
                    },
                    {
                        "tag": "fire",
                        "score": 0.4444642682
                    },
                    {
                        "tag": "glass",
                        "score": 0.6598904012
                    },
                    {
                        "tag": "humid",
                        "score": 0.8036775883
                    },
                    {
                        "tag": "ice",
                        "score": 0.5561805352
                    },
                    {
                        "tag": "indoor",
                        "score": 0.5162340571
                    },
                    {
                        "tag": "metro station",
                        "score": 0.6334707022
                    },
                    {
                        "tag": "open space",
                        "score": 0.7894682648
                    },
                    {
                        "tag": "people gathering",
                        "score": 0.8139993107
                    },
                    {
                        "tag": "people sitting",
                        "score": 0.5044388567
                    },
                    {
                        "tag": "people standing",
                        "score": 0.4018233732
                    },
                    {
                        "tag": "people swimming",
                        "score": 0.4556865975
                    },
                    {
                        "tag": "people waiting in line",
                        "score": 0.5079695247
                    },
                    {
                        "tag": "people watching",
                        "score": 0.8431971908
                    },
                    {
                        "tag": "performance",
                        "score": 0.531866146
                    },
                    {
                        "tag": "person",
                        "score": 0.6366661856
                    },
                    {
                        "tag": "railing",
                        "score": 0.455004632
                    },
                    {
                        "tag": "rusted",
                        "score": 0.5402916501
                    },
                    {
                        "tag": "sailing/boating",
                        "score": 0.4785256977
                    },
                    {
                        "tag": "scary scene",
                        "score": 0.486009431
                    },
                    {
                        "tag": "snow",
                        "score": 0.7426259426
                    },
                    {
                        "tag": "soothing scene",
                        "score": 0.5489102473
                    },
                    {
                        "tag": "still water",
                        "score": 0.553945227
                    },
                    {
                        "tag": "stressful scene",
                        "score": 0.4043581467
                    },
                    {
                        "tag": "sunlight",
                        "score": 0.7097005467
                    },
                    {
                        "tag": "transporting",
                        "score": 0.5886222662
                    },
                    {
                        "tag": "travelling",
                        "score": 0.4957083116
                    },
                    {
                        "tag": "warm",
                        "score": 0.4238883076
                    },
                    {
                        "tag": "working",
                        "score": 0.4848582708
                    }
                ]
            },
            "video_category": {
                "II_AI": []
            },
            "video_nsfw": {},
            "state_finish": 1,
            "video_sum": {
                "type": "II_AI",
                "cover": "3c37da08ac18decd18032bda4ea949fb.jpg",
                "keyframe": [],
                "summarization": ""
            },
            "cover_path": "https://imagecache2.obs.ap-southeast-3.myhuaweicloud.com/3c37da08ac18decd18032bda4ea949fb.jpg?Expires=1606120091&AccessKeyId=XRNGGDJRSD4KKMVJURS0&Signature=VPjBVCiRlWWg/o8SF%2BslvuTQ6os%3D",
            "file_path": "https://videocache-daypop.obs.ap-southeast-3.myhuaweicloud.com/5bc05a9db3536c5336b28bd4c1738602.mp4?Expires=1606120091&AccessKeyId=2VQ72CFPZDNUNGYNFX4C&Signature=w3IF/p/t%2B2L6HbOI6YT83/SX%2BXo%3D"
        },
        {
            "_id": "5fbb62b8acdef4858296b097",
            "id": "cbe85ea5327a67ba01e08089a0acf2ce",
            "country": "",
            "socialblade_category": "",
            "video_file": "/daypop-data/video/cbe85ea5327a67ba01e08089a0acf2ce.mp4",
            "url": "https://www.youtube.com/channel/UCvVn7_ff9w_Lw4S221qXoMA/videos",
            "video_url": "https://www.youtube.com/watch?v=lH214DQgXqY",
            "video_download_url": "",
            "title": "Jali Peer Caught | Exclusive Interview of Peer With Ladies ",
            "create_time": 1606115723487,
            "update_time": 1606116024743,
            "duration": "0:10:31",
            "labels": [
                "peer videos",
                "jali peer videos",
                "pakistan jali peer",
                "bilal khan",
                "hisab",
                "sar e aam",
                "pukaar",
                "iqrar ul hassan"
            ],
            "video_img": [],
            "site_name": "www.youtube.com",
            "author": "Cyber Tv",
            "release_time": "2020-11-22 00:00:00",
            "release_timestamp": 1605974400000,
            "quality": [],
            "category": "News & Politics",
            "content": "Welcome To Cyber Tv.\r Here We Will Regularly Upload Famous Comedy Shows , Latest News , Latest Entertainment Pakistani News, and Funny Programs With Jugtain.\r \r So Keep Watching and Subscribe Our Channel to be Entertained.",
            "comment_count": 0,
            "view_count": 170,
            "like_count": 15,
            "dislike_count": 1,
            "languages": 1,
            "video_cover": "909180e92f5b9d37f42e43722879048b.jpg",
            "subscriber": "823K",
            "task_type": "news",
            "recommond": 1,
            "weight": 7094,
            "data_type": "youtube",
            "text_entity": {
                "II_AI": [
                    "Here",
                    "Funny Programs With Jugtain.\r",
                    "Latest News",
                    "Keep Watching",
                    "Latest Entertainment Pakistani News",
                    "Subscribe Our Channel"
                ]
            },
            "text_labels": {
                "II_AI": [
                    {
                        "cyber tv": 0.9019761195
                    },
                    {
                        "entertainment pakistani news": 0.8961985085
                    },
                    {
                        "famous comedy": 0.8942952851
                    },
                    {
                        "funny programs": 0.8553594119
                    },
                    {
                        "news": 0.8366228844
                    },
                    {
                        "r": 0.7372223605
                    },
                    {
                        "channel": 0.7139529388
                    },
                    {
                        "jugtain": 0.6978107053
                    }
                ]
            },
            "text_category": {
                "II_AI": [
                    {
                        "tag": "COMEDY",
                        "score": 10.4369478226,
                        "type": "IIAI_CLS"
                    },
                    {
                        "tag": "BLACK VOICES",
                        "score": 6.1323485374,
                        "type": "IIAI_CLS"
                    },
                    {
                        "tag": "ENTERTAINMENT",
                        "score": 5.7394881248,
                        "type": "IIAI_CLS"
                    }
                ]
            },
            "video_labels": {
                "II_AI": [
                    {
                        "tag": "TV monitor",
                        "score": 0.3688409726
                    },
                    {
                        "tag": "airstrip",
                        "score": 0.4699277686
                    },
                    {
                        "tag": "bottle",
                        "score": 0.4314980193
                    },
                    {
                        "tag": "choir",
                        "score": 0.4762858352
                    },
                    {
                        "tag": "chorus",
                        "score": 0.4945539532
                    },
                    {
                        "tag": "cloth",
                        "score": 0.463722945
                    },
                    {
                        "tag": "cluttered space",
                        "score": 0.5328305795
                    },
                    {
                        "tag": "competing",
                        "score": 0.3837508454
                    },
                    {
                        "tag": "cooking",
                        "score": 0.7352225611
                    },
                    {
                        "tag": "cool/freezing",
                        "score": 0.4708276681
                    },
                    {
                        "tag": "cup",
                        "score": 0.319595074
                    },
                    {
                        "tag": "disco",
                        "score": 0.4565042469
                    },
                    {
                        "tag": "driving",
                        "score": 0.4649038636
                    },
                    {
                        "tag": "dry",
                        "score": 0.4010923169
                    },
                    {
                        "tag": "eating",
                        "score": 0.4655370664
                    },
                    {
                        "tag": "fashion event",
                        "score": 0.5684507824
                    },
                    {
                        "tag": "fridge",
                        "score": 0.5049252083
                    },
                    {
                        "tag": "glass",
                        "score": 0.5713640775
                    },
                    {
                        "tag": "home theater",
                        "score": 0.5417445028
                    },
                    {
                        "tag": "humid",
                        "score": 0.4860214499
                    },
                    {
                        "tag": "indoor",
                        "score": 0.5224306186
                    },
                    {
                        "tag": "instructing",
                        "score": 0.4757011427
                    },
                    {
                        "tag": "kite",
                        "score": 0.4747024335
                    },
                    {
                        "tag": "learning",
                        "score": 0.4632289712
                    },
                    {
                        "tag": "marble",
                        "score": 0.5238591419
                    },
                    {
                        "tag": "medical activity",
                        "score": 0.5319218358
                    },
                    {
                        "tag": "microwave",
                        "score": 0.4201803819
                    },
                    {
                        "tag": "mobile phone",
                        "score": 0.277457102
                    },
                    {
                        "tag": "model",
                        "score": 0.6323828115
                    },
                    {
                        "tag": "mouse",
                        "score": 0.3641034565
                    },
                    {
                        "tag": "music show",
                        "score": 0.5987333663
                    },
                    {
                        "tag": "ocean",
                        "score": 0.4159651471
                    },
                    {
                        "tag": "open space",
                        "score": 0.6015453242
                    },
                    {
                        "tag": "outdoor",
                        "score": 0.699678957
                    },
                    {
                        "tag": "paper",
                        "score": 0.4436150517
                    },
                    {
                        "tag": "pavement",
                        "score": 0.5411684365
                    },
                    {
                        "tag": "pedestrian",
                        "score": 0.4999288895
                    },
                    {
                        "tag": "people dining",
                        "score": 0.6938477112
                    },
                    {
                        "tag": "people doing business",
                        "score": 0.3798184277
                    },
                    {
                        "tag": "people doing sports",
                        "score": 0.5266268538
                    },
                    {
                        "tag": "people gathering",
                        "score": 0.6212723792
                    },
                    {
                        "tag": "people photographing",
                        "score": 0.487704141
                    },
                    {
                        "tag": "people sitting",
                        "score": 0.5369644027
                    },
                    {
                        "tag": "people standing",
                        "score": 0.4708887646
                    },
                    {
                        "tag": "people talking/addressing",
                        "score": 0.5355509736
                    },
                    {
                        "tag": "people waiting in line",
                        "score": 0.5066757838
                    },
                    {
                        "tag": "people walking",
                        "score": 0.4456643543
                    },
                    {
                        "tag": "people watching",
                        "score": 0.5805368279
                    },
                    {
                        "tag": "performance",
                        "score": 0.4813187336
                    },
                    {
                        "tag": "person",
                        "score": 0.9411498751
                    },
                    {
                        "tag": "pilgrim",
                        "score": 0.5214941374
                    },
                    {
                        "tag": "polyvinyl chloride/PVC",
                        "score": 0.4464573681
                    },
                    {
                        "tag": "reading",
                        "score": 0.5916834282
                    },
                    {
                        "tag": "remote",
                        "score": 0.386057764
                    },
                    {
                        "tag": "research",
                        "score": 0.530864358
                    },
                    {
                        "tag": "rubber/plastic",
                        "score": 0.3335567359
                    },
                    {
                        "tag": "rug",
                        "score": 0.5213779028
                    },
                    {
                        "tag": "sanctuary",
                        "score": 0.594300037
                    },
                    {
                        "tag": "scary scene",
                        "score": 0.448972565
                    },
                    {
                        "tag": "shopping",
                        "score": 0.5189983532
                    },
                    {
                        "tag": "shopping centre",
                        "score": 0.5377381128
                    },
                    {
                        "tag": "soothing scene",
                        "score": 0.4823074658
                    },
                    {
                        "tag": "speaker",
                        "score": 0.5379529664
                    },
                    {
                        "tag": "square/plaza",
                        "score": 0.5354372124
                    },
                    {
                        "tag": "stage",
                        "score": 0.4863924106
                    },
                    {
                        "tag": "street",
                        "score": 0.4668234352
                    },
                    {
                        "tag": "stressful scene",
                        "score": 0.4260714554
                    },
                    {
                        "tag": "sunlight",
                        "score": 0.6570295589
                    },
                    {
                        "tag": "tidying",
                        "score": 0.4881698253
                    },
                    {
                        "tag": "tie",
                        "score": 0.3637331109
                    },
                    {
                        "tag": "tiles",
                        "score": 0.5406972413
                    },
                    {
                        "tag": "travelling",
                        "score": 0.4891611077
                    },
                    {
                        "tag": "truck",
                        "score": 0.4474069228
                    },
                    {
                        "tag": "valise",
                        "score": 0.4167586392
                    },
                    {
                        "tag": "vehicle",
                        "score": 0.3224090087
                    },
                    {
                        "tag": "warm",
                        "score": 0.4181342182
                    },
                    {
                        "tag": "wine glass",
                        "score": 0.3572353976
                    },
                    {
                        "tag": "wood",
                        "score": 0.4701947016
                    }
                ]
            },
            "video_category": {
                "II_AI": []
            },
            "video_nsfw": {},
            "state_finish": 1,
            "video_sum": {
                "type": "II_AI",
                "cover": "909180e92f5b9d37f42e43722879048b.jpg",
                "keyframe": [],
                "summarization": ""
            },
            "cover_path": "https://imagecache2.obs.ap-southeast-3.myhuaweicloud.com/909180e92f5b9d37f42e43722879048b.jpg?Expires=1606120091&AccessKeyId=XRNGGDJRSD4KKMVJURS0&Signature=SZ1aMMej/DTCabZKMNoTV0S4MwU%3D",
            "file_path": "https://videocache-daypop.obs.ap-southeast-3.myhuaweicloud.com/cbe85ea5327a67ba01e08089a0acf2ce.mp4?Expires=1606120091&AccessKeyId=2VQ72CFPZDNUNGYNFX4C&Signature=y8VLGWDc6nP4%2BXsthrHIptKIxOQ%3D"
        },
        {
            "_id": "5fbb6267acdef48582912e81",
            "id": "2f97c5cdb79f3734b92022e1f5465fa8",
            "country": "",
            "socialblade_category": "Entertainment",
            "uploads": "",
            "channel_name": "Daily Bumps",
            "video_file": "/daypop-data/video/2f97c5cdb79f3734b92022e1f5465fa8.mp4",
            "url": "https://www.youtube.com/c/dailyBUMPS/videos/videos",
            "video_url": "https://www.youtube.com/watch?v=V2B9i0ZLBhg",
            "video_download_url": "",
            "title": "Mom\u2019s Big Christmas Secret! ",
            "create_time": 1606100397237,
            "update_time": 1606115943757,
            "duration": "0:15:32",
            "labels": [
                "daily bumps",
                "dailybumps",
                "christmas",
                "christmas tradition",
                "christmas decorating",
                "christmas tree",
                "smart tree",
                "christmas secret",
                "moms secret",
                "surprise",
                "christmas letter",
                "tradition",
                "ollie and finn",
                "Bryan lanning",
                "Oliver lanning",
                "Finley lanning",
                "missy lanning",
                "cute",
                "romantic",
                "married",
                "coupld",
                "2020",
                "elf on the shelf",
                "hey music video",
                "Bryan Lanning music",
                "mimi and papa",
                "auntie",
                "so cass",
                "so cassie",
                "cassie hollister"
            ],
            "video_img": [],
            "site_name": "www.youtube.com",
            "author": "Daily Bumps",
            "release_time": "2020-11-22 00:00:00",
            "release_timestamp": 1605974400000,
            "quality": "144p",
            "category": "People & Blogs",
            "content": "Get your LIMITED EDITION signed Hey! poster! http://bit.ly/heyposter I can\u2019t believe she\u2019s been keeping this from us!  Watch the HEY! Music video!! https://www.youtube.com/watch?v=AEtn5HTAHW8 \u2193\u2193\u2193 Fun Stuff Below! \u2193\u2193\u2193  Follow us on social media! \u2728TikTok \u2192 @bryanlanning \u2192 @missylanning\u2728 Instagram \u2192 @bryanlanning \u2192 @missylanning \u2192 @ollieandfinn  Karma\u2019s Instagram! \u2192 @Karma.And.Friends Twitter \u2192 @bryanlanning @missylanning Facebook \u2192 http://www.facebook.com/dailyBumps #ChristmasSecret #ChristmasTraditions #Holidays  Download our intro song here! \u2192 https://ffm.to/heybryan  Catch up on past years of Daily Bumps Year 5 Montage \u2192 https://youtu.be/hvLNchrb5AA Year 4 Montage \u2192 https://youtu.be/nR-z01FUSOc Year 3 Montage \u2192 https://youtu.be/3_VH4K055Gc  Year 2 Montage \u2192 https://youtu.be/yZAoxsqAi0M Year 1 Montage \u2192 https://youtu.be/Txw-fYASwUo",
            "comment_count": 0,
            "view_count": 67744,
            "like_count": 54,
            "dislike_count": 54,
            "languages": 1,
            "video_cover": "ffa4ea16002b26654d86d0cf6d386bac.jpg",
            "subscriber": "5.08M",
            "task_type": "oa",
            "data_type": "youtube",
            "weight": 123,
            "text_entity": {
                "II_AI": [
                    "Montage",
                    "Karma",
                    "Instagram",
                    "Daily Bumps Year",
                    "Twitter",
                    "Music"
                ]
            },
            "text_labels": {
                "II_AI": [
                    {
                        "limited edition": 0.8935776295
                    },
                    {
                        "@bryanlanning": 0.8800010209
                    },
                    {
                        "@missylanning": 0.8768773369
                    },
                    {
                        "@ollieandfinn karma": 0.8638183277
                    },
                    {
                        "tiktok": 0.8587517794
                    },
                    {
                        "#christmastraditions #holidays": 0.8542178027
                    },
                    {
                        "fun stuff": 0.8506565286
                    },
                    {
                        "instagram": 0.8460938292
                    },
                    {
                        "https://youtu.be/hvlnchrb5aa year": 0.837817425
                    },
                    {
                        "poster": 0.8283796558
                    },
                    {
                        "montage": 0.8283677113
                    },
                    {
                        "https://youtu.be/3_vh4k055gc year": 0.8250587339
                    },
                    {
                        "music video": 0.8070094763
                    },
                    {
                        "hey": 0.7913893334
                    },
                    {
                        "facebook": 0.7887160284
                    }
                ]
            },
            "text_category": {
                "II_AI": [
                    {
                        "tag": "QUEER VOICES",
                        "score": 9.4751682281,
                        "type": "IIAI_CLS"
                    },
                    {
                        "tag": "GOOD NEWS",
                        "score": 3.9104087353,
                        "type": "IIAI_CLS"
                    },
                    {
                        "tag": "ENTERTAINMENT",
                        "score": 3.5739481449,
                        "type": "IIAI_CLS"
                    }
                ]
            },
            "video_labels": {
                "II_AI": [
                    {
                        "tag": "TV monitor",
                        "score": 0.4482953576
                    },
                    {
                        "tag": "aged/tattered",
                        "score": 0.5176898998
                    },
                    {
                        "tag": "airstrip",
                        "score": 0.4998002617
                    },
                    {
                        "tag": "apple",
                        "score": 0.4299335396
                    },
                    {
                        "tag": "banana",
                        "score": 0.4322948422
                    },
                    {
                        "tag": "baseball bat",
                        "score": 0.4849343246
                    },
                    {
                        "tag": "beauty parlor",
                        "score": 0.6034159374
                    },
                    {
                        "tag": "book",
                        "score": 0.4060357133
                    },
                    {
                        "tag": "bottle",
                        "score": 0.3921154188
                    },
                    {
                        "tag": "bowl",
                        "score": 0.5418945103
                    },
                    {
                        "tag": "brick",
                        "score": 0.5784023977
                    },
                    {
                        "tag": "cable",
                        "score": 0.4322077578
                    },
                    {
                        "tag": "cake",
                        "score": 0.4398751676
                    },
                    {
                        "tag": "cameraman",
                        "score": 0.5316850725
                    },
                    {
                        "tag": "camping",
                        "score": 0.5888349284
                    },
                    {
                        "tag": "cat",
                        "score": 0.4071829225
                    },
                    {
                        "tag": "chair",
                        "score": 0.4248650316
                    },
                    {
                        "tag": "children's room",
                        "score": 0.5701600214
                    },
                    {
                        "tag": "clean room",
                        "score": 0.5488980181
                    },
                    {
                        "tag": "climbing",
                        "score": 0.5646815859
                    },
                    {
                        "tag": "clock",
                        "score": 0.5545923469
                    },
                    {
                        "tag": "cloth",
                        "score": 0.479617213
                    },
                    {
                        "tag": "cluttered space",
                        "score": 0.5761891505
                    },
                    {
                        "tag": "competing",
                        "score": 0.4108184432
                    },
                    {
                        "tag": "cooking",
                        "score": 0.6414157523
                    },
                    {
                        "tag": "cool/freezing",
                        "score": 0.5033222027
                    },
                    {
                        "tag": "cup",
                        "score": 0.4119699103
                    },
                    {
                        "tag": "digging",
                        "score": 0.5517503275
                    },
                    {
                        "tag": "dining table",
                        "score": 0.3852683429
                    },
                    {
                        "tag": "dirty",
                        "score": 0.5927714281
                    },
                    {
                        "tag": "disco",
                        "score": 0.4801962035
                    },
                    {
                        "tag": "dog",
                        "score": 0.53154256
                    },
                    {
                        "tag": "donut",
                        "score": 0.5438334686
                    },
                    {
                        "tag": "dry",
                        "score": 0.4133396341
                    },
                    {
                        "tag": "eating",
                        "score": 0.5096579206
                    },
                    {
                        "tag": "farming",
                        "score": 0.6371167692
                    },
                    {
                        "tag": "fashion event",
                        "score": 0.6031087523
                    },
                    {
                        "tag": "fighting sports gym",
                        "score": 0.5654779492
                    },
                    {
                        "tag": "flowers",
                        "score": 0.4871116513
                    },
                    {
                        "tag": "fridge",
                        "score": 0.4807377741
                    },
                    {
                        "tag": "gaming",
                        "score": 0.4857502325
                    },
                    {
                        "tag": "glass",
                        "score": 0.5596373307
                    },
                    {
                        "tag": "greenery",
                        "score": 0.6478500077
                    },
                    {
                        "tag": "handbag",
                        "score": 0.4224657901
                    },
                    {
                        "tag": "hiking",
                        "score": 0.5057268409
                    },
                    {
                        "tag": "humid",
                        "score": 0.5618336696
                    },
                    {
                        "tag": "ice",
                        "score": 0.4924872478
                    },
                    {
                        "tag": "indoor",
                        "score": 0.8040207018
                    },
                    {
                        "tag": "instructing",
                        "score": 0.4918914433
                    },
                    {
                        "tag": "knife",
                        "score": 0.4141971456
                    },
                    {
                        "tag": "learning",
                        "score": 0.5891489079
                    },
                    {
                        "tag": "marathon",
                        "score": 0.5091132172
                    },
                    {
                        "tag": "marble",
                        "score": 0.5238569668
                    },
                    {
                        "tag": "marching",
                        "score": 0.480461381
                    },
                    {
                        "tag": "medical activity",
                        "score": 0.5565780913
                    },
                    {
                        "tag": "metal",
                        "score": 0.2803926671
                    },
                    {
                        "tag": "microwave",
                        "score": 0.3757935863
                    },
                    {
                        "tag": "mobile phone",
                        "score": 0.3619266134
                    },
                    {
                        "tag": "model",
                        "score": 0.5904867556
                    },
                    {
                        "tag": "moving stairway",
                        "score": 0.5011628389
                    },
                    {
                        "tag": "music show",
                        "score": 0.593272751
                    },
                    {
                        "tag": "natural scene",
                        "score": 0.539852563
                    },
                    {
                        "tag": "newly-weds",
                        "score": 0.5207858122
                    },
                    {
                        "tag": "open space",
                        "score": 0.7013734421
                    },
                    {
                        "tag": "orange",
                        "score": 0.3862968356
                    },
                    {
                        "tag": "outdoor",
                        "score": 0.6182492967
                    },
                    {
                        "tag": "oven",
                        "score": 0.3908395957
                    },
                    {
                        "tag": "paper",
                        "score": 0.5190531273
                    },
                    {
                        "tag": "park",
                        "score": 0.6666125201
                    },
                    {
                        "tag": "pedestrian",
                        "score": 0.5657774647
                    },
                    {
                        "tag": "people dancing",
                        "score": 0.5500971719
                    },
                    {
                        "tag": "people dining",
                        "score": 0.5120384265
                    },
                    {
                        "tag": "people doing business",
                        "score": 0.3887362794
                    },
                    {
                        "tag": "people doing sports",
                        "score": 0.508733476
                    },
                    {
                        "tag": "people gathering",
                        "score": 0.5926231427
                    },
                    {
                        "tag": "people photographing",
                        "score": 0.5580465452
                    },
                    {
                        "tag": "people playing",
                        "score": 0.432686582
                    },
                    {
                        "tag": "people running",
                        "score": 0.5762708368
                    },
                    {
                        "tag": "people sitting",
                        "score": 0.5790849152
                    },
                    {
                        "tag": "people standing",
                        "score": 0.4460537711
                    },
                    {
                        "tag": "people waiting in line",
                        "score": 0.5031711111
                    },
                    {
                        "tag": "people walking",
                        "score": 0.4592726287
                    },
                    {
                        "tag": "people watching",
                        "score": 0.622941239
                    },
                    {
                        "tag": "performance",
                        "score": 0.512205833
                    },
                    {
                        "tag": "person",
                        "score": 0.8961519539
                    },
                    {
                        "tag": "pizza",
                        "score": 0.4370660217
                    },
                    {
                        "tag": "plant leaves",
                        "score": 0.569558906
                    },
                    {
                        "tag": "polyvinyl chloride/PVC",
                        "score": 0.5057616649
                    },
                    {
                        "tag": "potted plant",
                        "score": 0.3448794773
                    },
                    {
                        "tag": "praying",
                        "score": 0.537009974
                    },
                    {
                        "tag": "reading",
                        "score": 0.5778171197
                    },
                    {
                        "tag": "red-carpet event",
                        "score": 0.5749272573
                    },
                    {
                        "tag": "remote",
                        "score": 0.4252253449
                    },
                    {
                        "tag": "research",
                        "score": 0.5547665184
                    },
                    {
                        "tag": "ritual",
                        "score": 0.533848528
                    },
                    {
                        "tag": "rubber/plastic",
                        "score": 0.3687734854
                    },
                    {
                        "tag": "rug",
                        "score": 0.5692759515
                    },
                    {
                        "tag": "rugged places",
                        "score": 0.350243393
                    },
                    {
                        "tag": "rusted",
                        "score": 0.5649536675
                    },
                    {
                        "tag": "sand",
                        "score": 0.5695116016
                    },
                    {
                        "tag": "scary scene",
                        "score": 0.498072666
                    },
                    {
                        "tag": "scissors",
                        "score": 0.3827262395
                    },
                    {
                        "tag": "shopping",
                        "score": 0.5171065788
                    },
                    {
                        "tag": "shopping centre",
                        "score": 0.5680228389
                    },
                    {
                        "tag": "shrubbery",
                        "score": 0.5745625546
                    },
                    {
                        "tag": "sink",
                        "score": 0.4269130293
                    },
                    {
                        "tag": "snow",
                        "score": 0.5786176989
                    },
                    {
                        "tag": "sofa",
                        "score": 0.4286711505
                    },
                    {
                        "tag": "soil",
                        "score": 0.5718557826
                    },
                    {
                        "tag": "soothing scene",
                        "score": 0.5686266134
                    },
                    {
                        "tag": "spoon",
                        "score": 0.4362607055
                    },
                    {
                        "tag": "sports",
                        "score": 0.507635052
                    },
                    {
                        "tag": "sports ball",
                        "score": 0.3902367864
                    },
                    {
                        "tag": "square/plaza",
                        "score": 0.5374320703
                    },
                    {
                        "tag": "stadium",
                        "score": 0.5699949649
                    },
                    {
                        "tag": "still water",
                        "score": 0.5173559672
                    },
                    {
                        "tag": "stone",
                        "score": 0.5784158697
                    },
                    {
                        "tag": "street",
                        "score": 0.4876762064
                    },
                    {
                        "tag": "stressful scene",
                        "score": 0.4189763879
                    },
                    {
                        "tag": "sunlight",
                        "score": 0.5692794932
                    },
                    {
                        "tag": "teddy bear",
                        "score": 0.3079043862
                    },
                    {
                        "tag": "tiles",
                        "score": 0.5702393999
                    },
                    {
                        "tag": "toothbrush",
                        "score": 0.3986096455
                    },
                    {
                        "tag": "traffic light",
                        "score": 0.3469705403
                    },
                    {
                        "tag": "transporting",
                        "score": 0.6169005578
                    },
                    {
                        "tag": "travelling",
                        "score": 0.4615933142
                    },
                    {
                        "tag": "trees",
                        "score": 0.688485283
                    },
                    {
                        "tag": "vase",
                        "score": 0.4296104772
                    },
                    {
                        "tag": "vet",
                        "score": 0.738142192
                    },
                    {
                        "tag": "warm",
                        "score": 0.4344764246
                    },
                    {
                        "tag": "wedding",
                        "score": 0.5180313826
                    },
                    {
                        "tag": "wood",
                        "score": 0.504368879
                    }
                ]
            },
            "video_category": {
                "II_AI": []
            },
            "video_nsfw": {},
            "state_finish": 1,
            "video_sum": {
                "type": "II_AI",
                "cover": "ffa4ea16002b26654d86d0cf6d386bac.jpg",
                "keyframe": [],
                "summarization": ""
            },
            "cover_path": "https://imagecache2.obs.ap-southeast-3.myhuaweicloud.com/ffa4ea16002b26654d86d0cf6d386bac.jpg?Expires=1606120091&AccessKeyId=XRNGGDJRSD4KKMVJURS0&Signature=R9vQtHn%2B9urC4jo8ZewsLaP2snA%3D",
            "file_path": "https://videocache-daypop.obs.ap-southeast-3.myhuaweicloud.com/2f97c5cdb79f3734b92022e1f5465fa8.mp4?Expires=1606120091&AccessKeyId=2VQ72CFPZDNUNGYNFX4C&Signature=1BSeUe0C5Ql8QF9zZNwaURbBqg4%3D"
        },
        {
            "_id": "5fbb60a1acdef48582733e6f",
            "id": "86311c9d4071b8240c56d01c5e820077",
            "country": "",
            "socialblade_category": "Entertainment",
            "uploads": "",
            "channel_name": "Shark Puppet",
            "video_file": "/daypop-data/video/86311c9d4071b8240c56d01c5e820077.mp4",
            "url": "https://www.youtube.com/c/SharkPuppet/videos/videos",
            "video_url": "https://www.youtube.com/watch?v=1knBv-Lk4d0",
            "video_download_url": "",
            "title": "SHARK PUPPETS CRAZY EASTER!!!!! ",
            "create_time": 1606101470006,
            "update_time": 1606115489159,
            "duration": "0:06:22",
            "labels": [
                "shark puppet",
                "shark puppet yeah",
                "sharkpuppet",
                "shark",
                "puppet",
                "shark puppet cheese",
                "shark puppet scream",
                "shark puppet tik tok",
                "shark puppet thanos",
                "shark puppet meets pennywise",
                "shark puppet compilation",
                "yeah",
                "shark puppet videos",
                "funny shark puppet",
                "puppet shark",
                "the shark puppet",
                "puppets",
                "shark hand puppet",
                "funny",
                "sharks puppet",
                "shark puppet meme sharks",
                "shark puppet compilation reaction",
                "shark puppet funny",
                "easter",
                "crazy",
                "easter holiday",
                "crazy easter",
                "funny puppet",
                "baby shark"
            ],
            "video_img": [],
            "site_name": "www.youtube.com",
            "author": "Shark Puppet",
            "release_time": "2020-04-12 00:00:00",
            "release_timestamp": 1586620800000,
            "quality": [],
            "category": "Entertainment",
            "content": "Happy Easter everyone....YEAH!!! This Easter got a little crazy will all your favorites. What are you doing for the holiday?  #SharkPuppet #Easter #YEAH  CLICK DOWN \ud83e\uddc0\ud83e\udd88\ud83e\uddc0\ud83e\udd88\ud83e\uddc0 FOR MORE\r \r \ud83e\uddc0 SUBSCRIBE \ud83e\uddc0\r http://bit.ly/SubSharkPuppet\r \r \ud83e\uddc0 WATCH THESE VIDEOS \ud83e\uddc0\r \ud83e\udd88EVERY SHARK PUPPET VIDEO COMPILATION (IN ORDER) - https://youtu.be/VW4_mWSd4sE\r \ud83e\udd88 SHARK PUPPET COMPILATION 2 - https://youtu.be/LHR4SFlUWQQ\r \ud83e\udd88 SHARK PUPPET MEETS PENNYWIS3 FROM IT!!!!! - https://youtu.be/IvD9CaI5ZFk\r \ud83e\udd88 Shark Puppet Thanos - https://youtu.be/VuFu1USY1aM\r \ud83e\udd88 SHARK PUPPET FACE REVEAL - https://youtu.be/7Wz0yEEeyyk\r \r \ud83e\uddc0 FOLLOW ME\ud83e\uddc0\r \ud83e\udd88 TikTok - @the.shark.puppet\r \ud83e\udd88 Instagram - @the.shark.puppet\r \ud83e\udd88 Twitter - @thesharkpuppet\r \r \ud83e\udd88\ud83e\uddc0\ud83e\udd88\ud83e\uddc0\ud83e\udd88\ud83e\uddc0\ud83e\udd88\ud83e\uddc0\ud83e\udd88\ud83e\uddc0\ud83e\udd88\ud83e\uddc0\ud83e\udd88\ud83e\uddc0\ud83e\udd88\ud83e\uddc0",
            "comment_count": 0,
            "view_count": 1135021,
            "like_count": 934,
            "dislike_count": 934,
            "languages": 1,
            "video_cover": "e7e70ac3fa691ea3119c616188c2f146.jpg",
            "subscriber": "1.87M",
            "task_type": "oa",
            "data_type": "youtube",
            "weight": 123,
            "text_entity": {
                "II_AI": [
                    "CLICK",
                    "Instagram",
                    "Easter",
                    "FOR",
                    "Twitter"
                ]
            },
            "text_labels": {
                "II_AI": [
                    {
                        "every shark puppet video compilation": 0.9361080385
                    },
                    {
                        "#sharkpuppet #easter #yeah": 0.9316753588
                    },
                    {
                        "shark puppet compilation": 0.9214621703
                    },
                    {
                        "shark puppet": 0.9122393852
                    },
                    {
                        "shark puppet face": 0.9031683022
                    },
                    {
                        "video": 0.8976502821
                    },
                    {
                        "pennywis3": 0.8968263058
                    },
                    {
                        "https://youtu.be/lhr4sfluwqq\r": 0.8888592381
                    },
                    {
                        "https://youtu.be/vw4_mwsd4se\r": 0.8806542657
                    },
                    {
                        "https://youtu.be/ivd9cai5zfk\r": 0.8614442397
                    },
                    {
                        "happy easter everyone": 0.8457362689
                    },
                    {
                        "https://youtu.be/vufu1usy1am\r": 0.8429706219
                    },
                    {
                        "r": 0.8189121008
                    },
                    {
                        "@thesharkpuppet": 0.7979115148
                    },
                    {
                        "tiktok": 0.7740429229
                    }
                ]
            },
            "text_category": {
                "II_AI": [
                    {
                        "tag": "COMEDY",
                        "score": 8.9410820007,
                        "type": "IIAI_CLS"
                    },
                    {
                        "tag": "ENTERTAINMENT",
                        "score": 5.2745575905,
                        "type": "IIAI_CLS"
                    },
                    {
                        "tag": "QUEER VOICES",
                        "score": 4.8819937706,
                        "type": "IIAI_CLS"
                    }
                ]
            },
            "video_labels": {
                "II_AI": [
                    {
                        "tag": "aged/tattered",
                        "score": 0.4334309783
                    },
                    {
                        "tag": "airstrip",
                        "score": 0.4430612069
                    },
                    {
                        "tag": "aquarium",
                        "score": 0.7701988492
                    },
                    {
                        "tag": "ball pond",
                        "score": 0.6320482901
                    },
                    {
                        "tag": "banana",
                        "score": 0.3055991425
                    },
                    {
                        "tag": "bathing",
                        "score": 0.5299022069
                    },
                    {
                        "tag": "bear",
                        "score": 0.3267798731
                    },
                    {
                        "tag": "bird",
                        "score": 0.3337596012
                    },
                    {
                        "tag": "bottle",
                        "score": 0.3424851582
                    },
                    {
                        "tag": "bowl",
                        "score": 0.4323102859
                    },
                    {
                        "tag": "cable",
                        "score": 0.3700470138
                    },
                    {
                        "tag": "cake",
                        "score": 0.3060624531
                    },
                    {
                        "tag": "camping",
                        "score": 0.4837120915
                    },
                    {
                        "tag": "cat",
                        "score": 0.3211582759
                    },
                    {
                        "tag": "chair",
                        "score": 0.3012579365
                    },
                    {
                        "tag": "climbing",
                        "score": 0.4368303317
                    },
                    {
                        "tag": "cloth",
                        "score": 0.3969437946
                    },
                    {
                        "tag": "cluttered space",
                        "score": 0.4747952081
                    },
                    {
                        "tag": "competing",
                        "score": 0.3634836526
                    },
                    {
                        "tag": "cooking",
                        "score": 0.5149484783
                    },
                    {
                        "tag": "cool/freezing",
                        "score": 0.4339691343
                    },
                    {
                        "tag": "cow",
                        "score": 0.2715113272
                    },
                    {
                        "tag": "cup",
                        "score": 0.3484851522
                    },
                    {
                        "tag": "digging",
                        "score": 0.4743663338
                    },
                    {
                        "tag": "dining table",
                        "score": 0.2905823185
                    },
                    {
                        "tag": "dirty",
                        "score": 0.496318463
                    },
                    {
                        "tag": "disco",
                        "score": 0.4105068063
                    },
                    {
                        "tag": "diving",
                        "score": 0.3456915295
                    },
                    {
                        "tag": "dog",
                        "score": 0.3850435904
                    },
                    {
                        "tag": "donut",
                        "score": 0.3253820927
                    },
                    {
                        "tag": "dry",
                        "score": 0.2859205245
                    },
                    {
                        "tag": "eating",
                        "score": 0.4705097512
                    },
                    {
                        "tag": "farming",
                        "score": 0.4568427925
                    },
                    {
                        "tag": "fashion event",
                        "score": 0.4600056953
                    },
                    {
                        "tag": "fire hydrant",
                        "score": 0.4035959961
                    },
                    {
                        "tag": "flowers",
                        "score": 0.420269512
                    },
                    {
                        "tag": "fork",
                        "score": 0.2970376013
                    },
                    {
                        "tag": "frisbee",
                        "score": 0.3707083836
                    },
                    {
                        "tag": "glass",
                        "score": 0.4902640937
                    },
                    {
                        "tag": "grass",
                        "score": 0.4992023205
                    },
                    {
                        "tag": "greenery",
                        "score": 0.6027622638
                    },
                    {
                        "tag": "hiking",
                        "score": 0.4169209992
                    },
                    {
                        "tag": "hot dog",
                        "score": 0.2944452711
                    },
                    {
                        "tag": "humid",
                        "score": 0.4998101761
                    },
                    {
                        "tag": "ice",
                        "score": 0.4450013441
                    },
                    {
                        "tag": "igloo",
                        "score": 0.500007012
                    },
                    {
                        "tag": "indoor",
                        "score": 0.4457828474
                    },
                    {
                        "tag": "inside of a vehicle",
                        "score": 0.7417943238
                    },
                    {
                        "tag": "instructing",
                        "score": 0.4081005446
                    },
                    {
                        "tag": "knife",
                        "score": 0.3387573003
                    },
                    {
                        "tag": "learning",
                        "score": 0.443743673
                    },
                    {
                        "tag": "marble",
                        "score": 0.47346419
                    },
                    {
                        "tag": "medical activity",
                        "score": 0.438998707
                    },
                    {
                        "tag": "model",
                        "score": 0.4813636203
                    },
                    {
                        "tag": "natural scene",
                        "score": 0.4589003291
                    },
                    {
                        "tag": "newly-weds",
                        "score": 0.4423244472
                    },
                    {
                        "tag": "ocean",
                        "score": 0.391008848
                    },
                    {
                        "tag": "ocean deep",
                        "score": 0.4982135705
                    },
                    {
                        "tag": "open space",
                        "score": 0.6165588291
                    },
                    {
                        "tag": "operating theater",
                        "score": 0.4981262899
                    },
                    {
                        "tag": "outdoor",
                        "score": 0.6621573549
                    },
                    {
                        "tag": "oven",
                        "score": 0.3116123782
                    },
                    {
                        "tag": "paper",
                        "score": 0.4377446243
                    },
                    {
                        "tag": "park",
                        "score": 0.5475489484
                    },
                    {
                        "tag": "pavement",
                        "score": 0.4310947003
                    },
                    {
                        "tag": "people dining",
                        "score": 0.4284005306
                    },
                    {
                        "tag": "people doing business",
                        "score": 0.3368127305
                    },
                    {
                        "tag": "people doing sports",
                        "score": 0.4797058567
                    },
                    {
                        "tag": "people gathering",
                        "score": 0.4815234164
                    },
                    {
                        "tag": "people playing",
                        "score": 0.3903823309
                    },
                    {
                        "tag": "people sitting",
                        "score": 0.4190293422
                    },
                    {
                        "tag": "people standing",
                        "score": 0.3174490436
                    },
                    {
                        "tag": "people swimming",
                        "score": 0.3687471812
                    },
                    {
                        "tag": "people waiting in line",
                        "score": 0.4332150725
                    },
                    {
                        "tag": "people walking",
                        "score": 0.3176996296
                    },
                    {
                        "tag": "people watching",
                        "score": 0.4735544585
                    },
                    {
                        "tag": "performance",
                        "score": 0.4316638634
                    },
                    {
                        "tag": "person",
                        "score": 0.3453775005
                    },
                    {
                        "tag": "plant leaves",
                        "score": 0.5060888708
                    },
                    {
                        "tag": "playground",
                        "score": 0.8218730151
                    },
                    {
                        "tag": "playroom",
                        "score": 0.5737614906
                    },
                    {
                        "tag": "polyvinyl chloride/PVC",
                        "score": 0.4212958883
                    },
                    {
                        "tag": "potted plant",
                        "score": 0.2860945777
                    },
                    {
                        "tag": "reading",
                        "score": 0.482678147
                    },
                    {
                        "tag": "remote",
                        "score": 0.3884695102
                    },
                    {
                        "tag": "research",
                        "score": 0.4898980731
                    },
                    {
                        "tag": "rubber/plastic",
                        "score": 0.3136544662
                    },
                    {
                        "tag": "rug",
                        "score": 0.4493257464
                    },
                    {
                        "tag": "rugged places",
                        "score": 0.2927772781
                    },
                    {
                        "tag": "running water",
                        "score": 0.4705086427
                    },
                    {
                        "tag": "rusted",
                        "score": 0.434155353
                    },
                    {
                        "tag": "sand",
                        "score": 0.4194178704
                    },
                    {
                        "tag": "sandbox",
                        "score": 0.7719239008
                    },
                    {
                        "tag": "sandwich",
                        "score": 0.3003967965
                    },
                    {
                        "tag": "scary scene",
                        "score": 0.4431673178
                    },
                    {
                        "tag": "sheep",
                        "score": 0.296606166
                    },
                    {
                        "tag": "shrubbery",
                        "score": 0.5051635479
                    },
                    {
                        "tag": "sink",
                        "score": 0.3077041877
                    },
                    {
                        "tag": "smoke",
                        "score": 0.4235982983
                    },
                    {
                        "tag": "soil",
                        "score": 0.4900909081
                    },
                    {
                        "tag": "soothing scene",
                        "score": 0.5048609774
                    },
                    {
                        "tag": "spoon",
                        "score": 0.3259666532
                    },
                    {
                        "tag": "still water",
                        "score": 0.450529762
                    },
                    {
                        "tag": "stone",
                        "score": 0.486916642
                    },
                    {
                        "tag": "street",
                        "score": 0.4297416632
                    },
                    {
                        "tag": "stressful scene",
                        "score": 0.3481556004
                    },
                    {
                        "tag": "sunlight",
                        "score": 0.4677971809
                    },
                    {
                        "tag": "teddy bear",
                        "score": 0.354755397
                    },
                    {
                        "tag": "tiles",
                        "score": 0.4625466279
                    },
                    {
                        "tag": "toilet",
                        "score": 0.3204760215
                    },
                    {
                        "tag": "transporting",
                        "score": 0.4986027153
                    },
                    {
                        "tag": "travelling",
                        "score": 0.4355476541
                    },
                    {
                        "tag": "trees",
                        "score": 0.7366960122
                    },
                    {
                        "tag": "underwater",
                        "score": 0.4982135705
                    },
                    {
                        "tag": "vase",
                        "score": 0.3077127113
                    },
                    {
                        "tag": "vehicle",
                        "score": 0.3510473692
                    },
                    {
                        "tag": "vet",
                        "score": 0.7517535841
                    },
                    {
                        "tag": "warm",
                        "score": 0.3809339949
                    },
                    {
                        "tag": "wedding",
                        "score": 0.4425739482
                    },
                    {
                        "tag": "wine glass",
                        "score": 0.2853141757
                    },
                    {
                        "tag": "wood",
                        "score": 0.4169137158
                    }
                ]
            },
            "video_category": {
                "II_AI": []
            },
            "video_nsfw": {},
            "state_finish": 1,
            "video_sum": {
                "type": "II_AI",
                "cover": "e7e70ac3fa691ea3119c616188c2f146.jpg",
                "keyframe": [],
                "summarization": ""
            },
            "cover_path": "https://imagecache2.obs.ap-southeast-3.myhuaweicloud.com/e7e70ac3fa691ea3119c616188c2f146.jpg?Expires=1606120091&AccessKeyId=XRNGGDJRSD4KKMVJURS0&Signature=NEJdNoeTkSAyyDohIxEQllX7%2Btc%3D",
            "file_path": "https://videocache-daypop.obs.ap-southeast-3.myhuaweicloud.com/86311c9d4071b8240c56d01c5e820077.mp4?Expires=1606120091&AccessKeyId=2VQ72CFPZDNUNGYNFX4C&Signature=SEQhpAA5JDQ73bjI2COfSlpCNoU%3D"
        },
        {
            "_id": "5fbb6044acdef485826d2354",
            "id": "bab9d44bfecb706c7dbfdb8c8aed8cf1",
            "country": "",
            "socialblade_category": "Sports",
            "uploads": "",
            "channel_name": "Liverpool FC",
            "video_file": "/daypop-data/video/bab9d44bfecb706c7dbfdb8c8aed8cf1.mp4",
            "url": "https://www.youtube.com/c/liverpool%E3%80%80fc/videos",
            "video_url": "https://www.youtube.com/watch?v=4uWFTb4cjvs",
            "video_download_url": "",
            "title": "Klopp's Reaction: Special performance, team breakdown & Thiago update | Liverpool vs Leicester ",
            "create_time": 1606099399142,
            "update_time": 1606115396211,
            "duration": "0:03:55",
            "labels": [
                "Liverpool FC",
                "LFC",
                "Liverpool",
                "Anfield",
                "Melwood",
                "Liverpool Football Club",
                "premier league",
                "klopp",
                "klopp liverpool",
                "klopp interview",
                "liverpool vs leicester"
            ],
            "video_img": [],
            "site_name": "www.youtube.com",
            "author": "Liverpool FC",
            "release_time": "2020-11-22 00:00:00",
            "release_timestamp": 1605974400000,
            "quality": [],
            "category": "Sports",
            "content": "J\u00fcrgen Klopp gives his thoughts on Liverpool's impressive Premier League victory over Leicester City at Anfield.  Enjoy more content and get exclusive perks in our Liverpool FC Members Area, click here to find out more: https://www.youtube.com/LiverpoolFC/join\r \r Subscribe now to Liverpool FC on YouTube now and get notified when new videos land: https://www.youtube.com/subscription_center?add_user=LiverpoolFC",
            "comment_count": 0,
            "view_count": 64582,
            "like_count": 31,
            "dislike_count": 31,
            "languages": 1,
            "video_cover": "5109cd28ecce0dabf51521b4352e8880.jpg",
            "subscriber": "5.31M",
            "task_type": "oa",
            "data_type": "youtube",
            "weight": 123,
            "text_entity": {
                "II_AI": [
                    "Liverpool FC Members",
                    "FC",
                    "Premier",
                    "Liverpool FC",
                    "Leicester City",
                    "J\u00c3\u00bcrgen Klopp",
                    "Premier League",
                    "Leicester",
                    "YouTube",
                    "Liverpool",
                    "Anfield"
                ]
            },
            "text_labels": {
                "II_AI": [
                    {
                        "liverpool": 0.9107421084
                    },
                    {
                        "liverpool fc members area": 0.8461027646
                    },
                    {
                        "liverpool fc": 0.8260585422
                    },
                    {
                        "j\u00fcrgen klopp": 0.8248798779
                    },
                    {
                        "impressive premier league victory": 0.8155171049
                    },
                    {
                        "leicester city": 0.8128140206
                    },
                    {
                        "anfield": 0.8030646535
                    },
                    {
                        "https://www.youtube.com/liverpoolfc/join\r": 0.7550945458
                    },
                    {
                        "exclusive perks": 0.7454601466
                    },
                    {
                        "youtube": 0.7328966433
                    },
                    {
                        "https://www.youtube.com/subscription_center?add_user=liverpoolfc": 0.7165177714
                    },
                    {
                        "thought": 0.7148801622
                    },
                    {
                        "new videos land": 0.6985029864
                    },
                    {
                        "r": 0.6641245289
                    }
                ]
            },
            "text_category": {
                "II_AI": [
                    {
                        "tag": "SPORTS",
                        "score": 11.9306602478,
                        "type": "IIAI_CLS"
                    },
                    {
                        "tag": "TRAVEL",
                        "score": 4.0922923088,
                        "type": "IIAI_CLS"
                    },
                    {
                        "tag": "ENTERTAINMENT",
                        "score": 2.8776853085,
                        "type": "IIAI_CLS"
                    }
                ]
            },
            "video_labels": {
                "II_AI": [
                    {
                        "tag": "dry",
                        "score": 0.0046549626
                    },
                    {
                        "tag": "people gathering",
                        "score": 0.0060690193
                    },
                    {
                        "tag": "people standing",
                        "score": 0.6724211447
                    },
                    {
                        "tag": "people waiting in line",
                        "score": 0.0051730492
                    },
                    {
                        "tag": "person",
                        "score": 0.947733801
                    },
                    {
                        "tag": "rubber/plastic",
                        "score": 0.0031169458
                    },
                    {
                        "tag": "shopping",
                        "score": 0.0055058397
                    },
                    {
                        "tag": "stressful scene",
                        "score": 0.5464766071
                    },
                    {
                        "tag": "transporting",
                        "score": 0.0054445619
                    },
                    {
                        "tag": "working",
                        "score": 0.7455389547
                    }
                ]
            },
            "video_category": {
                "II_AI": []
            },
            "video_nsfw": {},
            "state_finish": 1,
            "video_sum": {
                "type": "II_AI",
                "cover": "5109cd28ecce0dabf51521b4352e8880.jpg",
                "keyframe": [],
                "summarization": ""
            },
            "cover_path": "https://imagecache2.obs.ap-southeast-3.myhuaweicloud.com/5109cd28ecce0dabf51521b4352e8880.jpg?Expires=1606120091&AccessKeyId=XRNGGDJRSD4KKMVJURS0&Signature=sgFOvLVRRwiTs63KuEz6PKEMias%3D",
            "file_path": "https://videocache-daypop.obs.ap-southeast-3.myhuaweicloud.com/bab9d44bfecb706c7dbfdb8c8aed8cf1.mp4?Expires=1606120091&AccessKeyId=2VQ72CFPZDNUNGYNFX4C&Signature=WEUOLW/9uBgOT5PZrDjE9DCjfl8%3D"
        },
        {
            "_id": "5fbb6040acdef485826ce15e",
            "id": "c9006044bb646e818905ae5e1d62a63a",
            "country": "",
            "socialblade_category": "Entertainment-Tv channel",
            "uploads": "",
            "channel_name": "ON",
            "video_file": "/daypop-data/video/c9006044bb646e818905ae5e1d62a63a.mp4",
            "url": "https://www.youtube.com/user/ONtveg/videos",
            "video_url": "https://www.youtube.com/watch?v=3oBL2QQNbOI",
            "video_download_url": "",
            "title": "\u0643\u0644\u0645\u0629 \u0623\u062e\u064a\u0631\u0629 - \u0648\u0627\u0644\u062f\u0629 \u0646\u0627\u062f\u064a\u0646 \u0636\u062d\u064a\u0629 \u0633\u0641\u0627\u062d \u0627\u0644\u062c\u064a\u0632\u0629 \u062a\u0635\u0631\u062e \u0639\u0644\u0649 \u0627\u0644\u0647\u0648\u0627\u0621: \u0628\u0646\u062a\u064a \u0645\u0634 \u0639\u0634\u064a\u0642\u062a\u0647 \u0648\u0645\u0627\u0645\u0627\u062a\u062a\u0634 ",
            "create_time": 1606098570490,
            "update_time": 1606115392725,
            "duration": "0:13:20",
            "labels": [],
            "video_img": [],
            "site_name": "www.youtube.com",
            "author": "ON",
            "release_time": "2020-11-22 00:00:00",
            "release_timestamp": 1605974400000,
            "quality": [],
            "category": "Entertainment",
            "content": "\u062a\u0627\u0628\u0639\u0648\u0646\u0627 \u0639\u0644\u0649 .. https://www.youtube.com/ONtveg https://www.facebook.com/ONtv https://www.instagram.com/ONtv https://twitter.com/ONTVEgy tiktok.com/onent",
            "comment_count": 0,
            "view_count": 16549,
            "like_count": 251,
            "dislike_count": 12,
            "languages": 0,
            "video_cover": "b8d62b56696e0d136d487158c9f12516.jpg",
            "subscriber": "6.11M",
            "task_type": "oa",
            "data_type": "youtube",
            "weight": 123,
            "text_entity": {
                "II_AI": ""
            },
            "text_labels": {
                "day_pop": []
            },
            "text_category": {
                "II_AI": [
                    {
                        "tag": "World",
                        "score": 0.0242295545
                    },
                    {
                        "tag": "MiddleEast",
                        "score": 0.024377374
                    },
                    {
                        "tag": "Sports",
                        "score": 0.3141371608
                    },
                    {
                        "tag": "Health",
                        "score": 0.0
                    },
                    {
                        "tag": "Business",
                        "score": 0.0676671937
                    },
                    {
                        "tag": "Religion",
                        "score": 0.0600718856
                    },
                    {
                        "tag": "RealEstate",
                        "score": 0.0245699473
                    },
                    {
                        "tag": "Tech",
                        "score": 0.03031913
                    },
                    {
                        "tag": "Politics",
                        "score": 0.0277949739
                    },
                    {
                        "tag": "Culture",
                        "score": 0.082560502
                    },
                    {
                        "tag": "Travel",
                        "score": 0.1186566055
                    },
                    {
                        "tag": "Car",
                        "score": 0.1344503313
                    },
                    {
                        "tag": "Environment",
                        "score": 0.0911653787
                    }
                ]
            },
            "video_labels": {
                "II_AI": [
                    {
                        "tag": "TV monitor",
                        "score": 0.4389009712
                    },
                    {
                        "tag": "cloth",
                        "score": 0.4629321332
                    },
                    {
                        "tag": "convention/convention center",
                        "score": 0.8216457834
                    },
                    {
                        "tag": "cup",
                        "score": 0.4221521616
                    },
                    {
                        "tag": "home theater",
                        "score": 0.6306125908
                    },
                    {
                        "tag": "indoor",
                        "score": 0.9011707237
                    },
                    {
                        "tag": "outdoor",
                        "score": 0.6919211949
                    },
                    {
                        "tag": "people gathering",
                        "score": 0.6577671025
                    },
                    {
                        "tag": "people sitting",
                        "score": 0.6849959969
                    },
                    {
                        "tag": "people standing",
                        "score": 0.5068394528
                    },
                    {
                        "tag": "people talking/addressing",
                        "score": 0.7796924456
                    },
                    {
                        "tag": "people waiting in line",
                        "score": 0.5187018522
                    },
                    {
                        "tag": "people watching",
                        "score": 0.7333965007
                    },
                    {
                        "tag": "performance",
                        "score": 0.5983878846
                    },
                    {
                        "tag": "person",
                        "score": 0.9707701506
                    },
                    {
                        "tag": "praying",
                        "score": 0.5945442535
                    },
                    {
                        "tag": "rubber/plastic",
                        "score": 0.4059665711
                    },
                    {
                        "tag": "rug",
                        "score": 0.7280490902
                    },
                    {
                        "tag": "speaker",
                        "score": 0.7400922533
                    },
                    {
                        "tag": "television studio",
                        "score": 0.757171365
                    },
                    {
                        "tag": "tie",
                        "score": 0.4714513373
                    },
                    {
                        "tag": "travelling",
                        "score": 0.5118939024
                    },
                    {
                        "tag": "vehicle",
                        "score": 0.7071627074
                    },
                    {
                        "tag": "wood",
                        "score": 0.5728574213
                    },
                    {
                        "tag": "working",
                        "score": 0.5401437935
                    }
                ]
            },
            "video_category": {
                "II_AI": []
            },
            "video_nsfw": {},
            "state_finish": 1,
            "video_sum": {
                "type": "II_AI",
                "cover": "b8d62b56696e0d136d487158c9f12516.jpg",
                "keyframe": [],
                "summarization": ""
            },
            "cover_path": "https://imagecache2.obs.ap-southeast-3.myhuaweicloud.com/b8d62b56696e0d136d487158c9f12516.jpg?Expires=1606120091&AccessKeyId=XRNGGDJRSD4KKMVJURS0&Signature=CzoTqqtJ5xa7rj128jfJXoKLZco%3D",
            "file_path": "https://videocache-daypop.obs.ap-southeast-3.myhuaweicloud.com/c9006044bb646e818905ae5e1d62a63a.mp4?Expires=1606120091&AccessKeyId=2VQ72CFPZDNUNGYNFX4C&Signature=gu1Tn9Ty6oQRwcE3UcE4Bn/qjJs%3D"
        },
        {
            "_id": "5fbb6032acdef485826bcc42",
            "id": "00bdac4ede6d0b8ac8853aa2cf2d7bbe",
            "country": "",
            "socialblade_category": "Fitness",
            "uploads": "",
            "channel_name": "OFFICIALTHENX",
            "video_file": "/daypop-data/video/00bdac4ede6d0b8ac8853aa2cf2d7bbe.mp4",
            "url": "https://www.youtube.com/c/OFFICIALTHENXSTUDIOS/videos/videos",
            "video_url": "https://www.youtube.com/watch?v=FRuiQ36x-Ik",
            "video_download_url": "",
            "title": "Super Effective Shoulder Workout Using Only Resistance Bands ",
            "create_time": 1606101224333,
            "update_time": 1606115378288,
            "duration": "0:14:41",
            "labels": [
                "6PACK",
                "abs",
                "beginners",
                "workout",
                "nutrtion",
                "thenx",
                "thenxapp",
                "heria",
                "heriapro",
                "build",
                "physique",
                "strength",
                "progress",
                "calisthenics",
                "fatburning",
                "routine",
                "thenx.com",
                "summer",
                "best fat burning",
                "loose stubborn belly fat",
                "Calisthenics Workout",
                "Chris Heria",
                "App",
                "Muscle",
                "Goals",
                "Transformation",
                "Motivation",
                "ChrisHeria.com",
                "Thenx Shop",
                "officialthenx",
                "build muscle",
                "street workout",
                "bodyweight training",
                "Super Effective Shoulder Workout Using Only Resistance Bands",
                "shoulder workout"
            ],
            "video_img": [],
            "site_name": "www.youtube.com",
            "author": "THENX",
            "release_time": "2020-11-22 00:00:00",
            "release_timestamp": 1605974400000,
            "quality": [],
            "category": "Sports",
            "content": "Join Chris Heria as he does a Super Effective Shoulder Workout Using Only Resistance Bands, a lightweight piece of equipment you can take anywhere for a solid shoulder workout.  Get the Music in the video made by Chris Heria:  https://soundcloud.com/chrisheria  FOLLOW CHRIS HERIA IG: @chrisheria  https://www.instagram.com/chrisheria/ VLOG YT CHANNEL: https://youtube.com/CHRISHERIA  Take your training to the next level with a Heria weight vest: https://chrisheria.com  Follow THENX on Instagram:  @thenx  https://www.instagram.com/thenx/  Join our Events: http://thenx.com/blog/events/ (currently updating) Heria Apparel here: https://chrisheria.com/ BECOME A THENX MEMBER: https://thenx.com/ DOWNLOAD THENX Iphone App: https://goo.gl/Qk235s  DOWNLOAD ANDROID App: https://goo.gl/kcRBpL SHOP THENX: https://thenx.com/shop VIEW OUR EVENT CALENDAR: http://thenx.com/blog/events/ THENX BLOG: http://thenx.com/blog/  The BEST Calisthenics App, secret techniques, programs, and step by step guided tutorials tested by thousands of people to reach their goals, with the most simplistic systematic approach to learning any calisthenics move such as the Handstand, Muscle Up, Planche, with ease. And it's all IN HERE https://WWW.THENX.COM",
            "comment_count": 0,
            "view_count": 12006,
            "like_count": 14,
            "dislike_count": 14,
            "languages": 1,
            "video_cover": "8a25fa7eadabe4c2db8064236b9e65f8.jpg",
            "subscriber": "6.36M",
            "task_type": "oa",
            "data_type": "youtube",
            "weight": 124,
            "text_entity": {
                "II_AI": [
                    "Muscle Up",
                    "Chris",
                    "Music",
                    "Planche",
                    "Super",
                    "SHOP",
                    "Chris Heria",
                    "Only Resistance Bands",
                    "BEST"
                ]
            },
            "text_labels": {
                "II_AI": [
                    {
                        "chris heria": 0.9440832323
                    },
                    {
                        "@chrisheria https://www.instagram.com/chrisheria/ vlog yt channel": 0.9283350662
                    },
                    {
                        "super effective shoulder workout": 0.9204596994
                    },
                    {
                        "https://thenx.com/ download thenx iphone app": 0.9092648262
                    },
                    {
                        "http://thenx.com/blog/events/ thenx blog": 0.8874555671
                    },
                    {
                        "thenx": 0.8724655811
                    },
                    {
                        "https://thenx.com/shop view": 0.8667023228
                    },
                    {
                        "chris heria ig": 0.8656427651
                    },
                    {
                        "shop thenx": 0.8649745531
                    },
                    {
                        "https://youtube.com/chrisheria": 0.8457793709
                    },
                    {
                        "@thenx https://www.instagram.com/thenx/": 0.8454365954
                    },
                    {
                        "android app": 0.8437426687
                    },
                    {
                        "thenx member": 0.8427248529
                    },
                    {
                        "event calendar": 0.8398343747
                    },
                    {
                        "http://thenx.com/blog/events/": 0.8308875422
                    }
                ]
            },
            "text_category": {
                "II_AI": [
                    {
                        "tag": "WELLNESS",
                        "score": 12.4900484085,
                        "type": "IIAI_CLS"
                    },
                    {
                        "tag": "ENTERTAINMENT",
                        "score": 4.1353273392,
                        "type": "IIAI_CLS"
                    },
                    {
                        "tag": "IMPACT",
                        "score": 3.5778355598,
                        "type": "IIAI_CLS"
                    }
                ]
            },
            "video_labels": {
                "II_AI": [
                    {
                        "tag": "TV monitor",
                        "score": 0.5899190161
                    },
                    {
                        "tag": "aged/tattered",
                        "score": 0.4399455598
                    },
                    {
                        "tag": "airstrip",
                        "score": 0.4631270177
                    },
                    {
                        "tag": "bathing",
                        "score": 0.4680937359
                    },
                    {
                        "tag": "bench",
                        "score": 0.3245756208
                    },
                    {
                        "tag": "bird",
                        "score": 0.3913449436
                    },
                    {
                        "tag": "blacktop",
                        "score": 0.3322291766
                    },
                    {
                        "tag": "bottle",
                        "score": 0.3265507839
                    },
                    {
                        "tag": "brick",
                        "score": 0.5658490911
                    },
                    {
                        "tag": "cable",
                        "score": 0.4227385821
                    },
                    {
                        "tag": "cat",
                        "score": 0.4105360258
                    },
                    {
                        "tag": "chair",
                        "score": 0.3409906333
                    },
                    {
                        "tag": "clean room",
                        "score": 0.4805895647
                    },
                    {
                        "tag": "climbing",
                        "score": 0.6535680598
                    },
                    {
                        "tag": "clock",
                        "score": 0.4066848136
                    },
                    {
                        "tag": "cloth",
                        "score": 0.40447786
                    },
                    {
                        "tag": "clothes shop",
                        "score": 0.6915090759
                    },
                    {
                        "tag": "clouds",
                        "score": 0.4547470876
                    },
                    {
                        "tag": "cluttered space",
                        "score": 0.4671972233
                    },
                    {
                        "tag": "competing",
                        "score": 0.3499406192
                    },
                    {
                        "tag": "convention/convention center",
                        "score": 0.5141956414
                    },
                    {
                        "tag": "cooking",
                        "score": 0.5165084594
                    },
                    {
                        "tag": "cool/freezing",
                        "score": 0.4411180013
                    },
                    {
                        "tag": "cow",
                        "score": 0.3294518616
                    },
                    {
                        "tag": "dining table",
                        "score": 0.2541517278
                    },
                    {
                        "tag": "diving",
                        "score": 0.4032805003
                    },
                    {
                        "tag": "dog",
                        "score": 0.2637186652
                    },
                    {
                        "tag": "driving",
                        "score": 0.4739674955
                    },
                    {
                        "tag": "dry",
                        "score": 0.3762954239
                    },
                    {
                        "tag": "eating",
                        "score": 0.4299447069
                    },
                    {
                        "tag": "elevator door",
                        "score": 0.3903478412
                    },
                    {
                        "tag": "fashion event",
                        "score": 0.5865144053
                    },
                    {
                        "tag": "fencing",
                        "score": 0.428506669
                    },
                    {
                        "tag": "gaming",
                        "score": 0.4111598732
                    },
                    {
                        "tag": "glass",
                        "score": 0.5353203287
                    },
                    {
                        "tag": "gym",
                        "score": 0.5345023161
                    },
                    {
                        "tag": "handbag",
                        "score": 0.2986626739
                    },
                    {
                        "tag": "humid",
                        "score": 0.4828268413
                    },
                    {
                        "tag": "ice",
                        "score": 0.4393478764
                    },
                    {
                        "tag": "ice skater",
                        "score": 0.4840778044
                    },
                    {
                        "tag": "indoor",
                        "score": 0.8324910066
                    },
                    {
                        "tag": "instructing",
                        "score": 0.4271185236
                    },
                    {
                        "tag": "knapsack",
                        "score": 0.3901647148
                    },
                    {
                        "tag": "marble",
                        "score": 0.4850383176
                    },
                    {
                        "tag": "medical activity",
                        "score": 0.5060511995
                    },
                    {
                        "tag": "metal",
                        "score": 0.2710693218
                    },
                    {
                        "tag": "mobile phone",
                        "score": 0.3892264654
                    },
                    {
                        "tag": "model",
                        "score": 0.6553415261
                    },
                    {
                        "tag": "moving stairway",
                        "score": 0.4696758359
                    },
                    {
                        "tag": "natural scene",
                        "score": 0.4454669282
                    },
                    {
                        "tag": "ocean",
                        "score": 0.3916828458
                    },
                    {
                        "tag": "open space",
                        "score": 0.4983787982
                    },
                    {
                        "tag": "outdoor",
                        "score": 0.5024186971
                    },
                    {
                        "tag": "paper",
                        "score": 0.4416761239
                    },
                    {
                        "tag": "passenger",
                        "score": 0.5117777001
                    },
                    {
                        "tag": "pavement",
                        "score": 0.4998469747
                    },
                    {
                        "tag": "pedestrian",
                        "score": 0.5154122345
                    },
                    {
                        "tag": "people dining",
                        "score": 0.4643063987
                    },
                    {
                        "tag": "people doing sports",
                        "score": 0.4635517867
                    },
                    {
                        "tag": "people gathering",
                        "score": 0.5001642299
                    },
                    {
                        "tag": "people sitting",
                        "score": 0.5199560284
                    },
                    {
                        "tag": "people skating",
                        "score": 0.4202921096
                    },
                    {
                        "tag": "people standing",
                        "score": 0.4191083126
                    },
                    {
                        "tag": "people swimming",
                        "score": 0.4975027997
                    },
                    {
                        "tag": "people waiting",
                        "score": 0.5064359599
                    },
                    {
                        "tag": "people waiting in line",
                        "score": 0.4381377246
                    },
                    {
                        "tag": "people walking",
                        "score": 0.4181126142
                    },
                    {
                        "tag": "people watching",
                        "score": 0.6397524242
                    },
                    {
                        "tag": "performance",
                        "score": 0.459474491
                    },
                    {
                        "tag": "person",
                        "score": 0.8971774811
                    },
                    {
                        "tag": "pilgrim",
                        "score": 0.4509028441
                    },
                    {
                        "tag": "platform",
                        "score": 0.4970419415
                    },
                    {
                        "tag": "polyvinyl chloride/PVC",
                        "score": 0.4334360927
                    },
                    {
                        "tag": "potted plant",
                        "score": 0.4938729077
                    },
                    {
                        "tag": "praying",
                        "score": 0.5111959199
                    },
                    {
                        "tag": "prison cell",
                        "score": 0.5838506445
                    },
                    {
                        "tag": "railing",
                        "score": 0.4167393167
                    },
                    {
                        "tag": "reading",
                        "score": 0.5055854287
                    },
                    {
                        "tag": "research",
                        "score": 0.46399157
                    },
                    {
                        "tag": "ritual",
                        "score": 0.5073043894
                    },
                    {
                        "tag": "rubber/plastic",
                        "score": 0.3210911646
                    },
                    {
                        "tag": "rug",
                        "score": 0.4504122063
                    },
                    {
                        "tag": "rusted",
                        "score": 0.4557842101
                    },
                    {
                        "tag": "sailing/boating",
                        "score": 0.4400934544
                    },
                    {
                        "tag": "scary scene",
                        "score": 0.4482367843
                    },
                    {
                        "tag": "scissors",
                        "score": 0.3472042285
                    },
                    {
                        "tag": "shopping",
                        "score": 0.5054374071
                    },
                    {
                        "tag": "skating rink",
                        "score": 0.4174024586
                    },
                    {
                        "tag": "snow",
                        "score": 0.4749702233
                    },
                    {
                        "tag": "sofa",
                        "score": 0.4829500338
                    },
                    {
                        "tag": "soothing scene",
                        "score": 0.4759296405
                    },
                    {
                        "tag": "still water",
                        "score": 0.5095643647
                    },
                    {
                        "tag": "street",
                        "score": 0.4305573732
                    },
                    {
                        "tag": "stressful scene",
                        "score": 0.3598360518
                    },
                    {
                        "tag": "sunbathing",
                        "score": 0.4753722815
                    },
                    {
                        "tag": "sunlight",
                        "score": 0.4826932676
                    },
                    {
                        "tag": "terrace from inside",
                        "score": 0.8151847631
                    },
                    {
                        "tag": "tidying",
                        "score": 0.4403688915
                    },
                    {
                        "tag": "tiles",
                        "score": 0.5074122173
                    },
                    {
                        "tag": "toothbrush",
                        "score": 0.3678280118
                    },
                    {
                        "tag": "transporting",
                        "score": 0.5075578742
                    },
                    {
                        "tag": "travelling",
                        "score": 0.4462687425
                    },
                    {
                        "tag": "vehicle",
                        "score": 0.3235366216
                    },
                    {
                        "tag": "vet",
                        "score": 0.656750336
                    },
                    {
                        "tag": "warm",
                        "score": 0.3793271435
                    },
                    {
                        "tag": "wood",
                        "score": 0.413198285
                    }
                ]
            },
            "video_category": {
                "II_AI": []
            },
            "video_nsfw": {},
            "state_finish": 1,
            "video_sum": {
                "type": "II_AI",
                "cover": "8a25fa7eadabe4c2db8064236b9e65f8.jpg",
                "keyframe": [],
                "summarization": ""
            },
            "cover_path": "https://imagecache2.obs.ap-southeast-3.myhuaweicloud.com/8a25fa7eadabe4c2db8064236b9e65f8.jpg?Expires=1606120091&AccessKeyId=XRNGGDJRSD4KKMVJURS0&Signature=5oJxsdWGMtx1O70C%2B%2BRjOQPNLvc%3D",
            "file_path": "https://videocache-daypop.obs.ap-southeast-3.myhuaweicloud.com/00bdac4ede6d0b8ac8853aa2cf2d7bbe.mp4?Expires=1606120091&AccessKeyId=2VQ72CFPZDNUNGYNFX4C&Signature=eKelq7iMVWZi%2BFN7M9vcYsRfaSo%3D"
        },
        {
            "_id": "5fbb5fceacdef485826528a8",
            "id": "5062db792c6af329265e0fef7fba1f73",
            "country": "",
            "socialblade_category": "Films",
            "uploads": "",
            "channel_name": "Shahid",
            "video_file": "/daypop-data/video/5062db792c6af329265e0fef7fba1f73.mp4",
            "url": "https://www.youtube.com/c/shahidvod/videos",
            "video_url": "https://www.youtube.com/watch?v=ZcpWPrE_MDM",
            "video_download_url": "",
            "title": "\u0639\u0644\u0645\u064a\u0646\u064a \u0627\u0644\u0639\u0648\u0645 \u064a\u0627 \u0643\u0644\u064a\u0648 ",
            "create_time": 1606097817169,
            "update_time": 1606115278961,
            "duration": "0:01:08",
            "labels": [
                "#SHAHID",
                "SHAHID",
                "SHAHID.net",
                "MBC",
                "vedios",
                "\u062d\u0644\u0642\u0627\u062a",
                "\u0645\u0634\u0627\u0647\u062f\u0629",
                "\u0643\u0644\u064a\u0628",
                "\u0645\u0634\u0647\u062f"
            ],
            "video_img": [],
            "site_name": "www.youtube.com",
            "author": "Shahid",
            "release_time": "2020-11-22 00:00:00",
            "release_timestamp": 1605974400000,
            "quality": "144p",
            "category": "Entertainment",
            "content": "\u0639\u0644\u0645\u064a\u0646\u064a \u0627\u0644\u0639\u0648\u0645 \u064a\u0627 \u0643\u0644\u064a\u0648 \ud83d\ude02\ud83d\ude02 \u064a\u0648\u0644\u064a\u0648\u0633 \u0642\u064a\u0635\u0631 \u0648\u0642\u0639 \u0641\u064a \u062d\u0628 \u0643\u0644\u064a\u0648\u0628\u062a\u0631\u0627 \u2764\ufe0f \u2764\ufe0f  #\u0645\u062a\u062d\u0641_\u0627\u0644\u062f\u062d\u064a\u062d    \u062d\u0635\u0631\u064a\u0627\u064b \u0639\u0644\u0649 #ShahidVIP  http://onshahid.net/6051HH3Rv",
            "comment_count": 0,
            "view_count": 3154,
            "like_count": 204,
            "dislike_count": 4,
            "languages": 0,
            "video_cover": "9c1ca41fe42ad6190a7a8257e85efa59.jpg",
            "subscriber": "6.62M",
            "task_type": "oa",
            "data_type": "youtube",
            "weight": 124,
            "text_entity": {
                "II_AI": ""
            },
            "text_labels": {
                "day_pop": [
                    {
                        "tag": "\u0639\u0644\u0645\u064a\u0646\u064a \u0627\u0644\u0639\u0648\u0645",
                        "score": 0.7070796897
                    },
                    {
                        "tag": "http",
                        "score": 0.0040318688
                    }
                ]
            },
            "text_category": {
                "II_AI": [
                    {
                        "tag": "World",
                        "score": 0.034952011
                    },
                    {
                        "tag": "MiddleEast",
                        "score": 0.0770840794
                    },
                    {
                        "tag": "Sports",
                        "score": 0.0991366282
                    },
                    {
                        "tag": "Health",
                        "score": 0.0358878113
                    },
                    {
                        "tag": "Business",
                        "score": 0.068704851
                    },
                    {
                        "tag": "Religion",
                        "score": 0.0197360851
                    },
                    {
                        "tag": "RealEstate",
                        "score": 0.0
                    },
                    {
                        "tag": "Tech",
                        "score": 0.0767496452
                    },
                    {
                        "tag": "Politics",
                        "score": 0.0307496525
                    },
                    {
                        "tag": "Culture",
                        "score": 0.4014520347
                    },
                    {
                        "tag": "Travel",
                        "score": 0.0764500201
                    },
                    {
                        "tag": "Car",
                        "score": 0.0471359603
                    },
                    {
                        "tag": "Environment",
                        "score": 0.0319612511
                    }
                ]
            },
            "video_labels": {
                "II_AI": [
                    {
                        "tag": "airstrip",
                        "score": 0.6389494615
                    },
                    {
                        "tag": "cloth",
                        "score": 0.5106442296
                    },
                    {
                        "tag": "cluttered space",
                        "score": 0.6505019369
                    },
                    {
                        "tag": "cooking",
                        "score": 0.6905425148
                    },
                    {
                        "tag": "dry",
                        "score": 0.4645345775
                    },
                    {
                        "tag": "fashion event",
                        "score": 0.8189794407
                    },
                    {
                        "tag": "indoor",
                        "score": 0.9404796127
                    },
                    {
                        "tag": "instructing",
                        "score": 0.4620242548
                    },
                    {
                        "tag": "model",
                        "score": 0.7891595451
                    },
                    {
                        "tag": "people dining",
                        "score": 0.7492653181
                    },
                    {
                        "tag": "people gathering",
                        "score": 0.7101884338
                    },
                    {
                        "tag": "people sitting",
                        "score": 0.9595343466
                    },
                    {
                        "tag": "people standing",
                        "score": 0.4864921239
                    },
                    {
                        "tag": "people waiting in line",
                        "score": 0.607147342
                    },
                    {
                        "tag": "people walking",
                        "score": 0.5163299237
                    },
                    {
                        "tag": "people watching",
                        "score": 0.8612336217
                    },
                    {
                        "tag": "performance",
                        "score": 0.824063539
                    },
                    {
                        "tag": "person",
                        "score": 0.8656880378
                    },
                    {
                        "tag": "praying",
                        "score": 0.5857110295
                    },
                    {
                        "tag": "rug",
                        "score": 0.5017000657
                    },
                    {
                        "tag": "stage",
                        "score": 0.5619773762
                    },
                    {
                        "tag": "travelling",
                        "score": 0.5744313109
                    },
                    {
                        "tag": "warm",
                        "score": 0.4922046185
                    },
                    {
                        "tag": "wood",
                        "score": 0.5958524049
                    }
                ]
            },
            "video_category": {
                "II_AI": []
            },
            "video_nsfw": {},
            "state_finish": 1,
            "video_sum": {
                "type": "II_AI",
                "cover": "9c1ca41fe42ad6190a7a8257e85efa59.jpg",
                "keyframe": [],
                "summarization": ""
            },
            "cover_path": "https://imagecache2.obs.ap-southeast-3.myhuaweicloud.com/9c1ca41fe42ad6190a7a8257e85efa59.jpg?Expires=1606120091&AccessKeyId=XRNGGDJRSD4KKMVJURS0&Signature=emN%2BGnY4lCx3oEuMFjFiq8SQJYc%3D",
            "file_path": "https://videocache-daypop.obs.ap-southeast-3.myhuaweicloud.com/5062db792c6af329265e0fef7fba1f73.mp4?Expires=1606120091&AccessKeyId=2VQ72CFPZDNUNGYNFX4C&Signature=5J2kWj5cpXq58okgde/QseZ55AY%3D"
        },
        {
            "_id": "5fbb5fc9acdef4858264bfd3",
            "id": "75221f7a45923f013c1e1a29398d505f",
            "country": "",
            "socialblade_category": "Films",
            "uploads": "",
            "channel_name": "Shahid",
            "video_file": "/daypop-data/video/75221f7a45923f013c1e1a29398d505f.mp4",
            "url": "https://www.youtube.com/c/shahidvod/videos",
            "video_url": "https://www.youtube.com/watch?v=vO8vLSZMva4",
            "video_download_url": "",
            "title": "\u0643\u0627\u0631\u0647\u0629 \u0627\u0644\u0631\u062c\u0627\u0644 \u26a0 ",
            "create_time": 1606097815093,
            "update_time": 1606115273886,
            "duration": "0:00:49",
            "labels": [
                "#SHAHID",
                "SHAHID",
                "SHAHID.net",
                "MBC",
                "vedios",
                "\u062d\u0644\u0642\u0627\u062a",
                "\u0645\u0634\u0627\u0647\u062f\u0629",
                "\u0643\u0644\u064a\u0628",
                "\u0645\u0634\u0647\u062f"
            ],
            "video_img": [],
            "site_name": "www.youtube.com",
            "author": "Shahid",
            "release_time": "2020-11-22 00:00:00",
            "release_timestamp": 1605974400000,
            "quality": [],
            "category": "Entertainment",
            "content": "\u0643\u0627\u0631\u0647\u0629 \u0627\u0644\u0631\u062c\u0627\u0644 \u26a0   \u064a\u0627 \u062a\u0631\u0649 \u0634\u0627\u0647\u0629 \u0628\u062a\u062a\u063a\u064a\u0631 \u0648\u0642\u0644\u0628\u0647\u0627 \u0628\u064a\u0631\u062c\u0639 \u064a\u062f\u0642\u061f  \u0634\u0648\u0641 12 \u062d\u0644\u0642\u0629 \u0645\u0646 #\u062f\u0641\u0639\u0629_\u0628\u064a\u0631\u0648\u062a \u0628\u0633 \u0639\u0644\u0649 #ShahidVIP http://onshahid.net/6056HHzMI",
            "comment_count": 0,
            "view_count": 4288,
            "like_count": 187,
            "dislike_count": 11,
            "languages": 0,
            "video_cover": "8759c9a18ea9e9a0054df1a106a73270.jpg",
            "subscriber": "6.62M",
            "task_type": "oa",
            "data_type": "youtube",
            "weight": 124,
            "text_entity": {
                "II_AI": ""
            },
            "text_labels": {
                "day_pop": [
                    {
                        "tag": "\u0643\u0627\u0631\u0647\u0629 \u0627\u0644\u0631\u062c\u0627\u0644",
                        "score": 0.7066185992
                    },
                    {
                        "tag": "\u064a\u062f\u0642",
                        "score": 0.0134119937
                    }
                ]
            },
            "text_category": {
                "II_AI": [
                    {
                        "tag": "World",
                        "score": 0.0070647448
                    },
                    {
                        "tag": "MiddleEast",
                        "score": 0.0629131272
                    },
                    {
                        "tag": "Sports",
                        "score": 0.0910392553
                    },
                    {
                        "tag": "Health",
                        "score": 0.0039864723
                    },
                    {
                        "tag": "Business",
                        "score": 0.0908371061
                    },
                    {
                        "tag": "Religion",
                        "score": 0.0059549259
                    },
                    {
                        "tag": "RealEstate",
                        "score": 0.0
                    },
                    {
                        "tag": "Tech",
                        "score": 0.0437085927
                    },
                    {
                        "tag": "Politics",
                        "score": 0.0127470763
                    },
                    {
                        "tag": "Culture",
                        "score": 0.5001583695
                    },
                    {
                        "tag": "Travel",
                        "score": 0.08581613
                    },
                    {
                        "tag": "Car",
                        "score": 0.0606624186
                    },
                    {
                        "tag": "Environment",
                        "score": 0.0351117663
                    }
                ]
            },
            "video_labels": {
                "II_AI": [
                    {
                        "tag": "aged/tattered",
                        "score": 0.4464298759
                    },
                    {
                        "tag": "airstrip",
                        "score": 0.5236738823
                    },
                    {
                        "tag": "bamboo grave",
                        "score": 0.8527338289
                    },
                    {
                        "tag": "bed",
                        "score": 0.4686090833
                    },
                    {
                        "tag": "book",
                        "score": 0.4229713239
                    },
                    {
                        "tag": "bowl",
                        "score": 0.3913376716
                    },
                    {
                        "tag": "bunk",
                        "score": 0.8501661036
                    },
                    {
                        "tag": "changing room",
                        "score": 0.6703136891
                    },
                    {
                        "tag": "climbing",
                        "score": 0.5886804966
                    },
                    {
                        "tag": "clock",
                        "score": 0.5770810953
                    },
                    {
                        "tag": "cloth",
                        "score": 0.4155657109
                    },
                    {
                        "tag": "cluttered space",
                        "score": 0.5571233695
                    },
                    {
                        "tag": "dirty",
                        "score": 0.5567566578
                    },
                    {
                        "tag": "elephant",
                        "score": 0.3953513197
                    },
                    {
                        "tag": "fashion event",
                        "score": 0.5458667613
                    },
                    {
                        "tag": "glass",
                        "score": 0.5368571928
                    },
                    {
                        "tag": "indoor",
                        "score": 0.7924951182
                    },
                    {
                        "tag": "model",
                        "score": 0.5801242788
                    },
                    {
                        "tag": "natural scene",
                        "score": 0.5454766591
                    },
                    {
                        "tag": "ocean deep",
                        "score": 0.624059241
                    },
                    {
                        "tag": "outdoor",
                        "score": 0.5425320874
                    },
                    {
                        "tag": "people sitting",
                        "score": 0.5126104852
                    },
                    {
                        "tag": "people walking",
                        "score": 0.3880086122
                    },
                    {
                        "tag": "people watching",
                        "score": 0.6214128747
                    },
                    {
                        "tag": "performance",
                        "score": 0.4723021667
                    },
                    {
                        "tag": "person",
                        "score": 0.7233218588
                    },
                    {
                        "tag": "pilgrim",
                        "score": 0.5305187584
                    },
                    {
                        "tag": "polyvinyl chloride/PVC",
                        "score": 0.483095085
                    },
                    {
                        "tag": "scary scene",
                        "score": 0.52203877
                    },
                    {
                        "tag": "soothing scene",
                        "score": 0.811243889
                    },
                    {
                        "tag": "tie",
                        "score": 0.3499214466
                    },
                    {
                        "tag": "underwater",
                        "score": 0.624059241
                    },
                    {
                        "tag": "warm",
                        "score": 0.4309811985
                    }
                ]
            },
            "video_category": {
                "II_AI": []
            },
            "video_nsfw": {},
            "state_finish": 1,
            "video_sum": {
                "type": "II_AI",
                "cover": "8759c9a18ea9e9a0054df1a106a73270.jpg",
                "keyframe": [],
                "summarization": ""
            },
            "cover_path": "https://imagecache2.obs.ap-southeast-3.myhuaweicloud.com/8759c9a18ea9e9a0054df1a106a73270.jpg?Expires=1606120091&AccessKeyId=XRNGGDJRSD4KKMVJURS0&Signature=nmPiztX7aCfAUOHpvdn0Y%2B6jVSg%3D",
            "file_path": "https://videocache-daypop.obs.ap-southeast-3.myhuaweicloud.com/75221f7a45923f013c1e1a29398d505f.mp4?Expires=1606120091&AccessKeyId=2VQ72CFPZDNUNGYNFX4C&Signature=7NokZMOjc6XzSoTIt9ymljlaTFU%3D"
        },
        {
            "_id": "5fbb5fbcacdef4858263ff18",
            "id": "c5d84511d00f73575d877c5bc21fb625",
            "country": "",
            "socialblade_category": "Films",
            "uploads": "",
            "channel_name": "Shahid",
            "video_file": "/daypop-data/video/c5d84511d00f73575d877c5bc21fb625.mp4",
            "url": "https://www.youtube.com/c/shahidvod/videos",
            "video_url": "https://www.youtube.com/watch?v=dXQqi32bcmI",
            "video_download_url": "",
            "title": "\u064a\u0627 \u0635\u0644\u0627\u0629 \u0627\u0644\u0632\u064a\u0646..\u0623\u063a\u0646\u064a\u0629 \u0627\u0644\u062e\u062a\u0627\u0645 \u0628\u0635\u0648\u062a \u0639\u0628\u062f\u0648 \u064a\u0627\u063a\u064a   #MBCTheVoiceSenior  \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0644\u0642\u0627\u062a \u0645\u062a\u0648\u0627\u0641\u0631\u0629 \u0639\u0644\u0649 #Shahid ",
            "create_time": 1606097808329,
            "update_time": 1606115260609,
            "duration": "0:01:47",
            "labels": [],
            "video_img": [],
            "site_name": "www.youtube.com",
            "author": "Shahid",
            "release_time": "2020-11-22 00:00:00",
            "release_timestamp": 1605974400000,
            "quality": [],
            "category": "Entertainment",
            "content": "\u064a\u0627 \u0635\u0644\u0627\u0629 \u0627\u0644\u0632\u064a\u0646..\u0623\u063a\u0646\u064a\u0629 \u0627\u0644\u062e\u062a\u0627\u0645 \u0628\u0635\u0648\u062a \u0639\u0628\u062f\u0648 \u064a\u0627\u063a\u064a   #MBCTheVoiceSenior  \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0644\u0642\u0627\u062a \u0645\u062a\u0648\u0627\u0641\u0631\u0629 \u0639\u0644\u0649 #Shahid",
            "comment_count": 0,
            "view_count": 4428,
            "like_count": 204,
            "dislike_count": 15,
            "languages": 0,
            "video_cover": "43b247d4317b3a280d7d75b4f0ec4520.jpg",
            "subscriber": "6.62M",
            "task_type": "oa",
            "data_type": "youtube",
            "weight": 124,
            "text_entity": {
                "II_AI": ""
            },
            "text_labels": {
                "day_pop": [
                    {
                        "tag": "\u0627\u0644\u062d\u0644\u0642\u0627\u062a",
                        "score": 0.3447235963
                    },
                    {
                        "tag": "\u0627\u0644\u0632\u064a\u0646",
                        "score": 0.3447235963
                    }
                ]
            },
            "text_category": {
                "II_AI": [
                    {
                        "tag": "World",
                        "score": 0.0220166929
                    },
                    {
                        "tag": "MiddleEast",
                        "score": 0.0755967721
                    },
                    {
                        "tag": "Sports",
                        "score": 0.0908255652
                    },
                    {
                        "tag": "Health",
                        "score": 0.0255870502
                    },
                    {
                        "tag": "Business",
                        "score": 0.0528913252
                    },
                    {
                        "tag": "Religion",
                        "score": 0.0333433859
                    },
                    {
                        "tag": "RealEstate",
                        "score": 0.0
                    },
                    {
                        "tag": "Tech",
                        "score": 0.1027692333
                    },
                    {
                        "tag": "Politics",
                        "score": 0.0391247794
                    },
                    {
                        "tag": "Culture",
                        "score": 0.4047749341
                    },
                    {
                        "tag": "Travel",
                        "score": 0.0617802069
                    },
                    {
                        "tag": "Car",
                        "score": 0.0601167269
                    },
                    {
                        "tag": "Environment",
                        "score": 0.0311733335
                    }
                ]
            },
            "video_labels": {
                "II_AI": [
                    {
                        "tag": "airstrip",
                        "score": 0.4597731589
                    },
                    {
                        "tag": "cameraman",
                        "score": 0.5387028507
                    },
                    {
                        "tag": "celebrity",
                        "score": 0.5810209342
                    },
                    {
                        "tag": "cloth",
                        "score": 0.4522118242
                    },
                    {
                        "tag": "cluttered space",
                        "score": 0.549718687
                    },
                    {
                        "tag": "competing",
                        "score": 0.4077672166
                    },
                    {
                        "tag": "convention/convention center",
                        "score": 0.6296341647
                    },
                    {
                        "tag": "disco",
                        "score": 0.4815837038
                    },
                    {
                        "tag": "dry",
                        "score": 0.3640276723
                    },
                    {
                        "tag": "glass",
                        "score": 0.5995229814
                    },
                    {
                        "tag": "indoor",
                        "score": 0.8352604942
                    },
                    {
                        "tag": "instructing",
                        "score": 0.4663546334
                    },
                    {
                        "tag": "mobile phone",
                        "score": 0.3822407387
                    },
                    {
                        "tag": "people doing business",
                        "score": 0.3805960841
                    },
                    {
                        "tag": "people gathering",
                        "score": 0.6514369904
                    },
                    {
                        "tag": "people photographing",
                        "score": 0.53103923
                    },
                    {
                        "tag": "people sitting",
                        "score": 0.6501411093
                    },
                    {
                        "tag": "people standing",
                        "score": 0.4664400543
                    },
                    {
                        "tag": "people talking/addressing",
                        "score": 0.7272564257
                    },
                    {
                        "tag": "people walking",
                        "score": 0.4045097578
                    },
                    {
                        "tag": "people watching",
                        "score": 0.6499379368
                    },
                    {
                        "tag": "performance",
                        "score": 0.5082085578
                    },
                    {
                        "tag": "person",
                        "score": 0.9447725353
                    },
                    {
                        "tag": "research",
                        "score": 0.701962406
                    },
                    {
                        "tag": "rubber/plastic",
                        "score": 0.3351775609
                    },
                    {
                        "tag": "shopping",
                        "score": 0.52154352
                    },
                    {
                        "tag": "speaker",
                        "score": 0.679437054
                    },
                    {
                        "tag": "stage",
                        "score": 0.4713297424
                    },
                    {
                        "tag": "stressful scene",
                        "score": 0.3996417156
                    },
                    {
                        "tag": "television studio",
                        "score": 0.7139439334
                    },
                    {
                        "tag": "tie",
                        "score": 0.7443966957
                    },
                    {
                        "tag": "traffic light",
                        "score": 0.4837394746
                    },
                    {
                        "tag": "warm",
                        "score": 0.4653085169
                    },
                    {
                        "tag": "wood",
                        "score": 0.4292481175
                    },
                    {
                        "tag": "working",
                        "score": 0.5309314431
                    }
                ]
            },
            "video_category": {
                "II_AI": []
            },
            "video_nsfw": {},
            "state_finish": 1,
            "video_sum": {
                "type": "II_AI",
                "cover": "43b247d4317b3a280d7d75b4f0ec4520.jpg",
                "keyframe": [],
                "summarization": ""
            },
            "cover_path": "https://imagecache2.obs.ap-southeast-3.myhuaweicloud.com/43b247d4317b3a280d7d75b4f0ec4520.jpg?Expires=1606120091&AccessKeyId=XRNGGDJRSD4KKMVJURS0&Signature=5iJq5rRspVdl9RfjwvfTya0N9SI%3D",
            "file_path": "https://videocache-daypop.obs.ap-southeast-3.myhuaweicloud.com/c5d84511d00f73575d877c5bc21fb625.mp4?Expires=1606120091&AccessKeyId=2VQ72CFPZDNUNGYNFX4C&Signature=o9hWYwloFNMGoaEwDLfBHyY7oFg%3D"
        },
        {
            "_id": "5fbb5fb9acdef4858263c3e6",
            "id": "e1df596669856f7d4d2f745e83240398",
            "country": "",
            "socialblade_category": "Films",
            "uploads": "",
            "channel_name": "Shahid",
            "video_file": "/daypop-data/video/e1df596669856f7d4d2f745e83240398.mp4",
            "url": "https://www.youtube.com/c/shahidvod/videos",
            "video_url": "https://www.youtube.com/watch?v=MM3ewNaA77g",
            "video_download_url": "",
            "title": "\u0634\u0648\u0643\u0648\u0644\u0627\u062a\u0647 \u0648\u0627\u062d\u062f\u0629 \u0635\u062d\u062a \u0627\u0644\u0645\u0627\u0636\u064a \u0648\u0631\u062c\u0639\u062a \u0630\u0643\u0631\u064a\u0627\u062a... \u0639\u0646\u062f\u0643\u0645 \u0630\u0643\u0631\u064a\u0627\u062a \u0645\u0634\u0627\u0628\u0647\u0629\u061f ",
            "create_time": 1606097812842,
            "update_time": 1606115257761,
            "duration": "0:01:43",
            "labels": [
                "#SHAHID",
                "SHAHID",
                "SHAHID.net",
                "MBC",
                "vedios",
                "\u062d\u0644\u0642\u0627\u062a",
                "\u0645\u0634\u0627\u0647\u062f\u0629",
                "\u0643\u0644\u064a\u0628",
                "\u0645\u0634\u0647\u062f"
            ],
            "video_img": [],
            "site_name": "www.youtube.com",
            "author": "Shahid",
            "release_time": "2020-11-22 00:00:00",
            "release_timestamp": 1605974400000,
            "quality": [],
            "category": "Entertainment",
            "content": "\u0634\u0648\u0643\u0648\u0644\u0627\u062a\u0647 \u0648\u0627\u062d\u062f\u0629 \u0635\u062d\u062a \u0627\u0644\u0645\u0627\u0636\u064a \u0648\u0631\u062c\u0639\u062a \u0630\u0643\u0631\u064a\u0627\u062a... \u0639\u0646\u062f\u0643\u0645 \u0630\u0643\u0631\u064a\u0627\u062a \u0645\u0634\u0627\u0628\u0647\u0629\u061f  http://onshahid.net/6056HHKhG  #\u0646\u0645\u0631\u0629_\u0627\u062a\u0646\u064a\u0646 #ShahidVIP",
            "comment_count": 0,
            "view_count": 2493,
            "like_count": 91,
            "dislike_count": 6,
            "languages": 0,
            "video_cover": "a3c1371d7a48fa036e07d1ba290ac04b.jpg",
            "subscriber": "6.62M",
            "task_type": "oa",
            "data_type": "youtube",
            "weight": 124,
            "text_entity": {
                "II_AI": ""
            },
            "text_labels": {
                "day_pop": [
                    {
                        "tag": "\u0630\u0643\u0631\u064a\u0627\u062a",
                        "score": 0.3900395399
                    },
                    {
                        "tag": "\u0646\u0645\u0631\u0629_\u0627\u062a\u0646\u064a\u0646",
                        "score": 0.3015352129
                    }
                ]
            },
            "text_category": {
                "II_AI": [
                    {
                        "tag": "World",
                        "score": 0.0295671802
                    },
                    {
                        "tag": "MiddleEast",
                        "score": 0.0709811598
                    },
                    {
                        "tag": "Sports",
                        "score": 0.0578208379
                    },
                    {
                        "tag": "Health",
                        "score": 0.0361978933
                    },
                    {
                        "tag": "Business",
                        "score": 0.0928836614
                    },
                    {
                        "tag": "Religion",
                        "score": 0.0290590748
                    },
                    {
                        "tag": "RealEstate",
                        "score": 0.0
                    },
                    {
                        "tag": "Tech",
                        "score": 0.0802878886
                    },
                    {
                        "tag": "Politics",
                        "score": 0.0336649045
                    },
                    {
                        "tag": "Culture",
                        "score": 0.3912731111
                    },
                    {
                        "tag": "Travel",
                        "score": 0.1115273386
                    },
                    {
                        "tag": "Car",
                        "score": 0.0337080397
                    },
                    {
                        "tag": "Environment",
                        "score": 0.0330288932
                    }
                ]
            },
            "video_labels": {
                "II_AI": [
                    {
                        "tag": "aged/tattered",
                        "score": 0.5667238758
                    },
                    {
                        "tag": "cloth",
                        "score": 0.4765685921
                    },
                    {
                        "tag": "cluttered space",
                        "score": 0.6100751686
                    },
                    {
                        "tag": "cooking",
                        "score": 0.7520661225
                    },
                    {
                        "tag": "dry",
                        "score": 0.4346147333
                    },
                    {
                        "tag": "fridge",
                        "score": 0.4399549161
                    },
                    {
                        "tag": "glass",
                        "score": 0.6904167812
                    },
                    {
                        "tag": "indoor",
                        "score": 0.7406211834
                    },
                    {
                        "tag": "outdoor",
                        "score": 0.743093795
                    },
                    {
                        "tag": "paper",
                        "score": 0.5391938073
                    },
                    {
                        "tag": "pedestrian",
                        "score": 0.6595187274
                    },
                    {
                        "tag": "people dining",
                        "score": 0.582085476
                    },
                    {
                        "tag": "people doing business",
                        "score": 0.4648102626
                    },
                    {
                        "tag": "people gathering",
                        "score": 0.5974029975
                    },
                    {
                        "tag": "people sitting",
                        "score": 0.6988261719
                    },
                    {
                        "tag": "people standing",
                        "score": 0.4726560753
                    },
                    {
                        "tag": "people waiting in line",
                        "score": 0.4869824224
                    },
                    {
                        "tag": "people walking",
                        "score": 0.4829166216
                    },
                    {
                        "tag": "person",
                        "score": 0.9206450625
                    },
                    {
                        "tag": "pharmacy",
                        "score": 0.7941582054
                    },
                    {
                        "tag": "polyvinyl chloride/PVC",
                        "score": 0.4858223542
                    },
                    {
                        "tag": "rubber/plastic",
                        "score": 0.4034971169
                    },
                    {
                        "tag": "rug",
                        "score": 0.6459901435
                    },
                    {
                        "tag": "scary scene",
                        "score": 0.5128190972
                    },
                    {
                        "tag": "shopping",
                        "score": 0.6878810026
                    },
                    {
                        "tag": "stressful scene",
                        "score": 0.4712422087
                    },
                    {
                        "tag": "tiles",
                        "score": 0.6804717419
                    },
                    {
                        "tag": "transporting",
                        "score": 0.6413211434
                    }
                ]
            },
            "video_category": {
                "II_AI": []
            },
            "video_nsfw": {},
            "state_finish": 1,
            "video_sum": {
                "type": "II_AI",
                "cover": "a3c1371d7a48fa036e07d1ba290ac04b.jpg",
                "keyframe": [],
                "summarization": ""
            },
            "cover_path": "https://imagecache2.obs.ap-southeast-3.myhuaweicloud.com/a3c1371d7a48fa036e07d1ba290ac04b.jpg?Expires=1606120091&AccessKeyId=XRNGGDJRSD4KKMVJURS0&Signature=JAvX66vkNqzr4Qw5tmgrnuMZicM%3D",
            "file_path": "https://videocache-daypop.obs.ap-southeast-3.myhuaweicloud.com/e1df596669856f7d4d2f745e83240398.mp4?Expires=1606120091&AccessKeyId=2VQ72CFPZDNUNGYNFX4C&Signature=S18fsMh/yHXfkb0RjwkrOvSi8VE%3D"
        },
        {
            "_id": "5fbb5fb2acdef48582633634",
            "id": "e683bdaa99fff4350300379b62eb9295",
            "country": "",
            "socialblade_category": "Films",
            "uploads": "",
            "channel_name": "Shahid",
            "video_file": "/daypop-data/video/e683bdaa99fff4350300379b62eb9295.mp4",
            "url": "https://www.youtube.com/c/shahidvod/videos",
            "video_url": "https://www.youtube.com/watch?v=NfN5PcDk_Sw",
            "video_download_url": "",
            "title": "\u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0642\u0646\u0648\u0627\u062a \u0623\u0645 \u0628\u064a \u0633\u064a ",
            "create_time": 1606097810649,
            "update_time": 1606115250873,
            "duration": "0:00:10",
            "labels": [],
            "video_img": [],
            "site_name": "www.youtube.com",
            "author": "Shahid",
            "release_time": "2020-11-22 00:00:00",
            "release_timestamp": 1605974400000,
            "quality": "144p",
            "category": "Entertainment",
            "content": "\u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0642\u0646\u0648\u0627\u062a \u0623\u0645 \u0628\u064a \u0633\u064a \u0648\u0628\u0627\u0642\u0629 \u0645\u0630\u0647\u0644\u0629 \u0645\u0646 \u0631\u0648\u062a\u0627\u0646\u0627 \u0628\u0627\u0646\u062a\u0638\u0627\u0631\u0643 #ShahidVIP http://onshahid.net/6050HHM3a",
            "comment_count": 0,
            "view_count": 662,
            "like_count": 19,
            "dislike_count": 3,
            "languages": 0,
            "video_cover": "0bf932267d8bdceb64b4f00225459f7c.jpg",
            "subscriber": "6.62M",
            "task_type": "oa",
            "data_type": "youtube",
            "weight": 124,
            "text_entity": {
                "II_AI": ""
            },
            "text_labels": {
                "day_pop": [
                    {
                        "tag": "\u0633\u064a \u0648\u0628\u0627\u0642\u0629",
                        "score": 0.6122592886
                    }
                ]
            },
            "text_category": {
                "II_AI": [
                    {
                        "tag": "World",
                        "score": 0.0302690733
                    },
                    {
                        "tag": "MiddleEast",
                        "score": 0.0234970991
                    },
                    {
                        "tag": "Sports",
                        "score": 0.0823522732
                    },
                    {
                        "tag": "Health",
                        "score": 0.0045550871
                    },
                    {
                        "tag": "Business",
                        "score": 0.1463470608
                    },
                    {
                        "tag": "Religion",
                        "score": 0.0795975253
                    },
                    {
                        "tag": "RealEstate",
                        "score": 0.0347004682
                    },
                    {
                        "tag": "Tech",
                        "score": 0.2684652209
                    },
                    {
                        "tag": "Politics",
                        "score": 0.0487647466
                    },
                    {
                        "tag": "Culture",
                        "score": 0.1672010124
                    },
                    {
                        "tag": "Travel",
                        "score": 0.0
                    },
                    {
                        "tag": "Car",
                        "score": 0.086294584
                    },
                    {
                        "tag": "Environment",
                        "score": 0.0279559027
                    }
                ]
            },
            "video_labels": {
                "II_AI": [
                    {
                        "tag": "aged/tattered",
                        "score": 0.0104957709
                    },
                    {
                        "tag": "blacktop",
                        "score": 0.5785222168
                    },
                    {
                        "tag": "diving",
                        "score": 0.0117611836
                    },
                    {
                        "tag": "gaming",
                        "score": 0.0118636182
                    },
                    {
                        "tag": "humid",
                        "score": 0.015644406
                    },
                    {
                        "tag": "metal",
                        "score": 0.4211630156
                    },
                    {
                        "tag": "mobile phone",
                        "score": 0.0072246101
                    },
                    {
                        "tag": "ocean",
                        "score": 0.6468416505
                    },
                    {
                        "tag": "open space",
                        "score": 0.825266094
                    },
                    {
                        "tag": "people waiting in line",
                        "score": 0.0107533032
                    },
                    {
                        "tag": "scary scene",
                        "score": 0.682546477
                    },
                    {
                        "tag": "soothing scene",
                        "score": 0.0142630669
                    },
                    {
                        "tag": "travelling",
                        "score": 0.5862415233
                    }
                ]
            },
            "video_category": {
                "II_AI": []
            },
            "video_nsfw": {},
            "state_finish": 1,
            "video_sum": {
                "type": "II_AI",
                "cover": "0bf932267d8bdceb64b4f00225459f7c.jpg",
                "keyframe": [],
                "summarization": ""
            },
            "cover_path": "https://imagecache2.obs.ap-southeast-3.myhuaweicloud.com/0bf932267d8bdceb64b4f00225459f7c.jpg?Expires=1606120091&AccessKeyId=XRNGGDJRSD4KKMVJURS0&Signature=xukIYMIJ9KbO66zGXm9Uf7I3rnQ%3D",
            "file_path": "https://videocache-daypop.obs.ap-southeast-3.myhuaweicloud.com/e683bdaa99fff4350300379b62eb9295.mp4?Expires=1606120091&AccessKeyId=2VQ72CFPZDNUNGYNFX4C&Signature=U/7xlv%2BrG8WdyN8bUnU77J2obfM%3D"
        }
    ]
    return (
        <>
            {
                data.map((item) => {
                    return (
                        <Card>
                            <Space direction={"vertical"}>
                                <Row>
                                    <Col span={6}>
                                        <video style={{width: "100%", height: "100%", "object-fit": "fill"}}
                                               id={item.id} controls
                                               src={item.file_path.split('?', 1)[0]}/>
                                    </Col>
                                    <Col span={18} style={{padding: "10px"}}>
                                        <p>Data: {item.release_time}</p>
                                        <p>Title: {item.title} </p>
                                        <p>Url: {item.url}</p>
                                        <p>Content: {item.content}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={6}>
                                        <Image
                                            src={item.cover_path.split('?', 1)[0]}/>
                                    </Col>
                                    <Col span={18} style={{padding: "10px"}}>
                                        <p>Entity:</p>
                                        <p>Label:</p>
                                        <p>
                                            {
                                                item.video_labels.II_AI.map(temp => <Tag>{temp.tag}</Tag>)
                                            }
                                        </p>
                                        <p>category:</p>
                                    </Col>
                                </Row>
                            </Space>
                        </Card>
                    )
                })
            }
        </>
    )
}