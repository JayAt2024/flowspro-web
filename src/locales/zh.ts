export const zh = {
  nav: {
    home: '首页',
    features: '功能',
    keyMaps: '按键映射',
    terms: '条款与隐私'
  },
  download: '下载',
  language: '语言',
  en: 'English',
  zh: '中文',
  footer: {
    copyright: '© 2026 Flows Pro',
    contact: '联系方式:',
    terms: '用户协议',
    privacy: '隐私政策',
    feedback: '问题反馈',
    suggestion: '功能建议',
    youtube: 'Youtube',
    x: 'X',
    xiaohongshu: '小红书',
    wechat: '微信公众号'
  },
  home: {
    feature1: {
      title: '可视化节点编辑，轻松构建工作流',
      description: '通过拖拽节点即可创建复杂的图像处理流程，无需编写代码。支持图片滤镜、文本处理、数学计算等丰富的节点类型。'
    },
    feature2: {
      title: '丰富的图像处理能力',
      description: '内置数十种滤镜效果以及基础图片处理功能，支持滤镜叠加组合。可以实时预览效果，所见即所得。'
    },
    feature3: {
      title: '文本创作，创意无限',
      description: '支持多种字体、字号、颜色，添加阴影、描边、下划线等装饰效果。轻松生成精美文字图片。'
    },
    feature4: {
      title: '一键批量运行，批量导出',
      description: '设置输入参数后一键执行工作流，支持多页工作流切换。生成图片批量导出，多种导出格式可选。'
    },
    feature5: {
      title: 'iOS/iPadOS/macOS 三平台支持',
      description: '导出的 flowspro 文件在多种平台可使用。多种平台，一致的使用体验。'
    },
    feature6: {
      title: '掌控你的工作流',
      description: '提升工作效率',
      iosDownload: '下载 iOS 版本',
      macDownload: '下载 macOS 版本'
    },
    viewLarger: '点击查看大图'
  },
  features: {
    title: 'Flows Pro 节点功能总览',
    imageSection: '图像处理节点',
    imageNodes: [
      { name: '图片滤镜', english: 'Image Filter', description: '应用多种滤镜效果到图片，支持滤镜叠加' },
      { name: '添加边框', english: 'Add Border to Image', description: '为图片添加边框效果' },
      { name: '添加圆角', english: 'Add Radius to Image', description: '为图片添加圆角效果' },
      { name: '图片裁剪', english: 'Image Cropping', description: '裁剪图片到指定区域' },
      { name: '图片翻转', english: 'Image Flip', description: '水平或垂直翻转图片' },
      { name: '图片旋转', english: 'Image Rotating', description: '按指定角度旋转图片' },
      { name: '颜色反转', english: 'Image Color Invert', description: '反转图片颜色' },
      { name: '图片切片', english: 'Image Slicing', description: '将图片切割成多个部分' },
      { name: '图片合成', english: 'Image Composing', description: '多层图像叠加合成' },
      { name: '网格合成', english: 'Image Composing Grid', description: '多张图片网格布局拼接' },
      { name: '创建背景', english: 'Image Make Background', description: '创建指定颜色的背景图片' },
      { name: '获取尺寸', english: 'Get Image Dimensions', description: '获取图片宽度和高度' },
      { name: '获取平均色', english: 'Get Average Color', description: '提取图片的平均颜色值' },
      { name: '获取主色调', english: 'Get Dominant Colors', description: '提取图片的主要颜色' },
      { name: '图像分割', english: 'Image Segmenting', description: '图像分割处理' },
      { name: 'Cube转LUT', english: 'Cube to LUT', description: '将Cube文件转换为LUT滤镜' }
    ],
    textSection: '文本处理节点',
    textNodes: [
      { name: '文本转图片', english: 'Text to Image', description: '将文本渲染为图片，支持字体、颜色、装饰' },
      { name: '字符计数', english: 'Character Count', description: '计算文本的字符长度' },
      { name: '反转文本', english: 'Reverse Text', description: '反转文本字符串' },
      { name: '分割文本', english: 'Split Text', description: '按分隔符截取文本范围' },
      { name: '获取子串位置', english: 'Get Substring Start', description: '查找子串在文本中的起始位置' }
    ],
    colorSection: '颜色处理节点',
    colorNodes: [
      { name: '颜色转图片', english: 'Color to Image', description: '将颜色值转换为纯色图片' },
      { name: '随机颜色', english: 'Get Random Color', description: '生成随机颜色值' },
      { name: '渐变转图片', english: 'Linear Gradient to Image', description: '创建线性渐变效果图片' }
    ],
    mathSection: '数学计算节点',
    mathNodes: [
      { name: '加法', english: 'Addition', description: '两个双精度数相加' },
      { name: '减法', english: 'Subtraction', description: '两个双精度数相减' },
      { name: '乘法', english: 'Multiplication', description: '两个双精度数相乘' },
      { name: '除法', english: 'Division', description: '两个双精度数相除' },
      { name: '幂运算', english: 'Power', description: '计算数的幂次' },
      { name: '平方根', english: 'Square Root', description: '计算平方根' },
      { name: '随机小数', english: 'Random Decimal', description: '生成随机双精度数' },
      { name: '取最大值', english: 'Get Greater Value', description: '取两个数中的较大值' },
      { name: '取最小值', english: 'Get Less Value', description: '取两个数中的较小值' },
      { name: '小数转整数', english: 'Decimal to Integer', description: '将双精度数转为整数' },
      { name: '整数转小数', english: 'Int to Decimal', description: '将整数转为双精度数' }
    ],
    boolSection: '逻辑判断节点',
    boolNodes: [
      { name: '逻辑与', english: 'Logic And', description: '两个布尔值的逻辑与运算' },
      { name: '逻辑或', english: 'Logic Or', description: '两个布尔值的逻辑或运算' },
      { name: '取反', english: 'Flip Bool', description: '布尔值取反' },
      { name: '相等判断', english: 'Is Equal', description: '判断两个值是否相等' },
      { name: '大于判断', english: 'Is Greater than', description: '判断第一个值是否大于第二个' },
      { name: '小于判断', english: 'Is Less than', description: '判断第一个值是否小于第二个' },
      { name: '条件分支', english: 'If Else', description: '根据条件执行不同的处理路径' }
    ],
    supportedText: '节点',
    total: '目前 Flows Pro 支持共',
  },
  keyMaps: {
    title: '按键映射',
    editorShortcuts: '编辑器页面快捷键',
    zoomControl: '缩放控制',
    zoomIn: '放大',
    zoomOut: '缩小',
    resetZoom: '重置缩放',
    nodeOperation: '节点操作',
    copyNode: '复制节点',
    pasteNode: '粘贴节点',
    copyNodeToClipboard: '复制节点到剪切板',
    clearNodeLayout: '清理节点布局',
    connectDefaultInputOutput: '连接默认输入输出',
    disconnectAllConnections: '断开所有连接',
    deleteNode: '删除节点',
    undoRedo: '撤销/重做',
    undo: '撤销',
    redo: '重做',
    executionControl: '执行控制',
    execute: '执行',
    executeAllNodes: '执行全部节点',
    executeSelectedNodes: '执行选中节点',
    executeOnChange: '随修改执行全部节点',
    listPageShortcuts: '列表页面快捷键',
    flowOperation: '流程操作',
    runFlow: '运行流程',
    editFlow: '编辑流程',
    editBasicInfo: '编辑基本信息',
    exportFlow: '导出流程',
    deleteFlow: '删除流程',
    importFlow: '导入流程',
    newFlow: '新建流程',
    search: '搜索',
    executionPageShortcuts: '执行页面快捷键',
    pageOperation: '页面操作',
    copyCurrentPage: '复制当前页面',
    newPage: '新增页面',
    deleteCurrentPage: '删除当前页面',
    executeAllPages: '执行所有页面',
    pageNavigation: '翻页',
    previousPage: '前一页',
    nextPage: '后一页',
    exportImagePageShortcuts: '导出图片页面快捷键',
    exportQualitySelection: '导出质量选择',
    highestQuality: '最高质量',
    mediumHighQuality: '中高质量',
    highQuality: '高质量',
    mediumQuality: '中等质量',
    lowQuality: '低等质量',
    imageComparisonPage: '图片对比页面',
    comparisonModeSwitch: '对比模式切换',
    pressComparison: '按压对比',
    slideComparison: '滑动对比',
    sideBySideComparison: '并排对比',
    commonShortcuts: '通用快捷键',
    cancelClose: '取消/关闭'
  }
};