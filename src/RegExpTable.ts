import util from "./models/util";
export const RegExpTable = {
    "gachaLinkBind": {
        "name": "kmc绑定抽卡链接",
        "value": util.getRuleReg(/(绑定)?(抽卡|唤取|hq)链接(绑定)?/)
    },
    "getUPLink": {
        "name": "kmc获取抽卡链接",
        "value": util.getRuleReg(/获取(抽卡|唤取|hq)链接/),
    },
    "HelpApp": {
        "name": "kmc帮助",
        "value": util.getRuleReg(/(帮助|help)/),
    },
    "HelpUp": {
        "name": "kmc抽卡帮助",
        "value": util.getRuleReg(/(抽卡|唤取|hq)帮助/),
    },
    "HelpLog": {
        "name": "kmc抽卡记录",
        "value": util.getRuleReg(/(抽卡|唤取|hq)(记录)?(up|UP|常驻|)?(?!帮助)/),
    },
    "UpdateUp": {
        "name": "kmc抽卡记录更新",
        "value": util.getRuleReg(/((抽卡|唤取|hq)(记录)?更新)|(更新(抽卡|唤取|hq)(记录)?)/),
    }
}
