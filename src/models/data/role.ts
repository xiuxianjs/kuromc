import profile, { T_Profile } from "./profile";

// Importing avatar images using import statements
import avatar1 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_1_UI.png';
import avatar2 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_2_UI.png';
import avatar3 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_3_UI.png';
import avatar4 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_4_UI.png';
import avatar5 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_5_UI.png';
import avatar6 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_6_UI.png';
import avatar7 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_7_UI.png';
import avatar8 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_8_UI.png';
import avatar9 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_9_UI.png';
import avatar10 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_10_UI.png';
import avatar11 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_11_UI.png';
import avatar12 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_12_UI.png';
import avatar13 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_13_UI.png';
import avatar14 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_14_UI.png';
import avatar15 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_15_UI.png';
import avatar16 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_17_UI.png';
import avatar17 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_18_UI.png';
import avatar18 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_23_UI.png';
import avatar19 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_24_UI.png';
import avatar20 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_26_UI.png';
import avatar21 from '@src/assets/image/IconRoleHead175/T_IconRoleHead175_27_UI.png';


export type T_RoleData = {
  名字: string,
  resourceId?: number,
  性别: string,
  生日: string,
  属性: T_Profile,
  武器: string,
  所属: string,
  星级: number,
  avatar: string,
  up?: boolean
};

export default [
  { 名字: '秧秧', resourceId: 1402, 性别: '女', 生日: '10月11日', 属性: profile.气动, 武器: '迅刀', 所属: '今州', 星级: 4, avatar: avatar1 },
  { 名字: '炽霞', 性别: '女', 生日: '4月18日', 属性: profile.热熔, 武器: '佩枪', 所属: '今州', 星级: 4, avatar: avatar2 },
  { 名字: '维里奈', 性别: '女', 生日: '5月18日', 属性: profile.衍射, 武器: '音感仪', 所属: '今州', 星级: 5, avatar: avatar3 },
  { 名字: '漂泊者-男', 性别: '女', 生日: '', 属性: {}, 武器: '', 所属: '', 星级: 5, avatar: avatar4 },
  { 名字: '漂泊者-女', 性别: '女', 生日: '', 属性: {}, 武器: '', 所属: '', 星级: 5, avatar: avatar5 },
  { 名字: '白芷', 性别: '女', 生日: '9月10日', 属性: profile.冷凝, 武器: '音感仪', 所属: '今州', 星级: 4, avatar: avatar6 },
  { 名字: '散华', resourceId: 1102, 性别: '女', 生日: '1月20日', 属性: profile.冷凝, 武器: '迅刀', 所属: '今州', 星级: 4, avatar: avatar7 },
  { 名字: '安可', 性别: '女', 生日: '3月21日', 属性: profile.热熔, 武器: '音感仪', 所属: '黑海岸', 星级: 5, avatar: avatar8 },
  { 名字: '桃祈', resourceId: 1601, 性别: '女', 生日: '2月25日', 属性: profile.湮灭, 武器: '长刃', 所属: '今州', 星级: 4, avatar: avatar9 },
  { 名字: '丹瑾', 性别: '女', 生日: '8月31日', 属性: profile.湮灭, 武器: '迅刀', 所属: '今州', 星级: 4, avatar: avatar10 },
  { 名字: '忌炎', resourceId: 1404, 性别: '男', 生日: '12月14日', 属性: profile.气动, 武器: '长刃', 所属: '今州', 星级: 5, up: true, avatar: avatar11 },
  { 名字: '秋水', resourceId: 1403, 性别: '男', 生日: '6月11日', 属性: profile.气动, 武器: '佩枪', 所属: '黑海岸', 星级: 4, avatar: avatar12 },
  { 名字: '莫特斐', 性别: '男', 生日: '11月6日', 属性: profile.热熔, 武器: '佩枪', 所属: '今州', 星级: 4, avatar: avatar13 },
  { 名字: '凌阳', 性别: '男', 生日: '8月8日', 属性: profile.冷凝, 武器: '臂铠', 所属: '今州', 星级: 5, avatar: avatar14 },
  { 名字: '渊武', resourceId: 1303, 性别: '男', 生日: '10月2日', 属性: profile.导电, 武器: '臂铠', 所属: '今州', 星级: 4, avatar: avatar15 },
  { 名字: '吟霖', resourceId: 1302, 性别: '女', 生日: '9月17日', 属性: profile.导电, 武器: '音感仪', 所属: '今州', 星级: 5, up: true, avatar: avatar16 },
  { 名字: '卡卡罗', 性别: '男', 生日: '7月8日', 属性: profile.导电, 武器: '长刃', 所属: '今州', 星级: 5, avatar: avatar17 },
  { 名字: '鉴心', 性别: '女', 生日: '4月6日', 属性: profile.气动, 武器: '臂铠', 所属: '今州', 星级: 5, avatar: avatar18 },
  { 名字: '今汐', resourceId: 1304, 性别: '女', 生日: '', 属性: profile.衍射, 武器: '长刃', 所属: '今州', 星级: 5, up: true, avatar: avatar19 },
  { 名字: '长离', resourceId: 1205, 性别: '女', 生日: '', 属性: profile.热熔, 武器: '迅刀', 所属: '今州', 星级: 5, up: true, avatar: avatar20 },
  { 名字: '折枝', resourceId: 1105, 性别: '女', 生日: '', 属性: profile.冷凝, 武器: '音感仪', 所属: '今州', 星级: 5, up: true, avatar: avatar21 },
] as T_RoleData[];