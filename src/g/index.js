// 用户
export const user = {
    TOKEN: 'TOKEN', // 用户token
}
export const user_role = {
    root: -1,
    admin: 0,
    normal: 1
}
export const user_role_desc = {
    [user_role.root]: "超管",
    [user_role.admin]: "管理员",
    [user_role.normal]: "普通用户",
}
// 菜单
export const menu = {
    MENU: 0, // 菜单类型
    MENU_ITEM: 1, // 菜单项类型
}
export const menu_desc = {
    [menu.MENU]: '菜单',
    [menu.MENU_ITEM]: '菜单项'
}
export const menu_state = {
    fixed: -1, // 默认
    normal: 0 // 正常
}

export const menu_jump = {
    app: 0,
    comp: 1,
    outer: 2
}

// 菜单组
export const menu_group_type = {
    menu: 0,
    menu_group: 1
}
export const menu_group_type_desc = {
    [menu_group_type.menu]: "菜单组",
    [menu_group_type.menu_group]: "复合组"
}

// 添加内容
export const content_type = {
    url: 'url',
    html: 'html',
    img: 'img',
    pdf: 'pdf',
    doc: 'doc',
    docx: 'docx',
    docs: 'docs',
    ppt: 'ppt',
    pptx: 'pptx',
    audio: 'audio',
    video: 'video',
    note: 'note'
}
export const content_type_desc = {
    [content_type.html]: "网页",
    [content_type.url]: "网页",
    [content_type.img]: "图片",
    [content_type.pdf]: "PDF",
    [content_type.doc]: "word",
    [content_type.docx]: "word",
    [content_type.ppt]: "ppt",
    [content_type.pptx]: "ppt",
    [content_type.audio]: "语音",
    [content_type.video]: "视频",
    [content_type.note]: "笔记"
}
// content 处理结果
export const contents_result = {
    pendding: -1,
    success: 0,
    failed: 1,
    no_content: 2,
    data_error: 3,
    short_content: 4
}

export const contents_result_desc = {
    [contents_result.pendding]: '处理中',
    [contents_result.success]: '处理成功',
    [contents_result.failed]: '处理失败, 未知错误',
    [contents_result.no_content]: '处理失败, 未解析出内容',
    [contents_result.data_error]: '数据出错',
    [contents_result.short_content]: '内容小于规定长度，需大于20字'
}
// 视频
export const video_status = {
    fail: -1,
    waiting: 0,
    success: 1
}
export const video_status_desc = {
    [video_status.fail]: "失败",
    [video_status.waiting]: "处理中",
    [video_status.success]: "成功"
}

// 错误码
export const code = {
    success: 0,
    auth_error: 1
}