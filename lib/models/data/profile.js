import fileUrl from '../../assets/image/IconElement/T_IconElementWind3.png.js';
import fileUrl$5 from '../../assets/image/IconElement/T_IconElementThunder3.png.js';
import fileUrl$1 from '../../assets/image/IconElement/T_IconElementFire3.png.js';
import fileUrl$2 from '../../assets/image/IconElement/T_IconElementLight3.png.js';
import fileUrl$3 from '../../assets/image/IconElement/T_IconElementIce3.png.js';
import fileUrl$4 from '../../assets/image/IconElement/T_IconElementDark3.png.js';

var E_Profile_Key;
(function (E_Profile_Key) {
    E_Profile_Key["\u6C14\u52A8"] = "\u6C14\u52A8";
    E_Profile_Key["\u5BFC\u7535"] = "\u5BFC\u7535";
    E_Profile_Key["\u70ED\u7194"] = "\u70ED\u7194";
    E_Profile_Key["\u884D\u5C04"] = "\u884D\u5C04";
    E_Profile_Key["\u51B7\u51DD"] = "\u51B7\u51DD";
    E_Profile_Key["\u6E6E\u706D"] = "\u6E6E\u706D";
})(E_Profile_Key || (E_Profile_Key = {}));
var profile = {
    气动: {
        key: 'Wind',
        name: '气动',
        icon: fileUrl
    },
    导电: {
        key: 'Thunder',
        name: '导电',
        icon: fileUrl$5
    },
    热熔: {
        key: 'Fire',
        name: '热熔',
        icon: fileUrl$1
    },
    衍射: {
        key: 'Light',
        name: '衍射',
        icon: fileUrl$2
    },
    冷凝: {
        key: 'Ice',
        name: '冷凝',
        icon: fileUrl$3
    },
    湮灭: {
        key: 'Dark',
        name: '湮灭',
        icon: fileUrl$4
    }
};

export { E_Profile_Key, profile as default };
