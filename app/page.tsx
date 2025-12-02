import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="bg-linear-to-r from-blue-600 to-blue-800 text-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="bg-white p-1 rounded-full">
                <Image
                  src="/jytech-logo.png"
                  alt="杰圆商务"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
              <span className="text-2xl font-bold">杰圆商务</span>
            </a>
            <div className="flex items-center gap-6">
              <a
                href="#services"
                className="hover:text-blue-200 transition-colors"
              >
                服务内容
              </a>
              <a
                href="#pricing"
                className="hover:text-blue-200 transition-colors"
              >
                价格方案
              </a>
              <a
                href="/partners"
                className="hover:text-blue-200 transition-colors"
              >
                US Partner
              </a>
              <a
                href="#contact"
                className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                立即咨询
              </a>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-5xl font-bold mb-6">专业公司运营代理服务</h2>
          <p className="text-xl mb-4 text-blue-100">
            为您的企业提供全方位美国公司运营管理解决方案
          </p>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            20年+国际电商经验 | 资深运营专家团队 | 专业保障您的业务运营
          </p>
        </div>
      </header>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">服务定价</h3>
          <p className="text-xl text-gray-600">透明、公正、合理的收费标准</p>
        </div>

        {/* One-time Fees */}
        <div className="max-5xl mx-auto mb-16">
          <h4 className="text-2xl font-bold text-gray-700 mb-8 text-center">
            一次性项目费用
          </h4>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Case Fee */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-100 hover:border-blue-300 transition-colors h-full">
              <div className="text-center h-full flex flex-col">
                <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  注册费用
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-800">$988</span>
                  <span className="text-gray-600 text-xl">/案例</span>
                </div>
                <ul className="text-left space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    完整的公司注册与运营流程
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    专业文件准备与审核
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    合规性检查与验证
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    政府部门提交与跟进
                  </li>
                </ul>
              </div>
            </div>

            {/* Landing Page Development Fee */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-teal-100 hover:border-teal-300 transition-colors h-full">
              <div className="text-center h-full flex flex-col">
                <div className="inline-block bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  网页制作
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-800">
                    $3,688
                  </span>
                  <span className="text-gray-600 text-xl">/项目</span>
                </div>
                <ul className="text-left space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    专业 Landing Page 设计
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    响应式移动端适配
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    SEO 基础优化配置
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    部署与性能优化
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Maintenance Fees */}
        <div className="max-w-7xl mx-auto">
          <h4 className="text-2xl font-bold text-gray-700 mb-8 text-center">
            月度维护费用
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Basic Maintenance Fee */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-100 hover:border-purple-300 transition-colors h-full">
              <div className="text-center h-full flex flex-col">
                <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  公司实体基础维护
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-800">$58</span>
                  <span className="text-gray-600 text-xl">/月</span>
                </div>
                <ul className="text-left space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    公司实体信息维护
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    法人信息调整服务
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    年度报告提交协助
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    商务咨询支持服务
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Maintenance Fee */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-100 hover:border-green-300 transition-colors h-full">
              <div className="text-center h-full flex flex-col">
                <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  公司实体专业维护
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-800">$288</span>
                  <span className="text-gray-600 text-xl">/月</span>
                </div>
                <ul className="text-left space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    专业财务管理服务
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    定期财务报告与账务处理
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    持续的合规性监控
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    法规变更及时通知
                  </li>
                </ul>
              </div>
            </div>

            {/* Google Business Maintenance Fee */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-orange-100 hover:border-orange-300 transition-colors h-full">
              <div className="text-center h-full flex flex-col">
                <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Google Business
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-800">$128</span>
                  <span className="text-gray-600 text-xl">/月</span>
                </div>
                <ul className="text-left space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Google Business Profile 管理
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    评论监控与回复管理
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    商业信息定期更新
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    分析报告与优化建议
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Marketing SEO Fee */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-pink-100 hover:border-pink-300 transition-colors h-full">
              <div className="text-center h-full flex flex-col">
                <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  社交营销 SEO
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-800">$568</span>
                  <span className="text-gray-600 text-xl">/月</span>
                </div>
                <ul className="text-left space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    社交媒体账号管理
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    SEO 搜索引擎优化
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    内容创作与发布
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    营销数据分析报告
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                我们的服务
              </h3>
              <p className="text-xl text-gray-600">
                提供公司注册、财务管理等全方位服务
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 hover:shadow-xl transition-shadow">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  美国公司注册
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    LLC、C-Corp 等公司类型注册
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    EIN 税号申请
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    注册地址与注册代理服务
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    公司章程与文件准备
                  </li>
                </ul>
              </div>

              <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 hover:shadow-xl transition-shadow">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  专业财务管理
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    日常账务处理与记账
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    月度/季度/年度财务报表
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    税务申报与规划
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    财务咨询与分析
                  </li>
                </ul>
              </div>

              <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 hover:shadow-xl transition-shadow">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  合规性管理
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    年度报告提交
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    营业执照续期
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    法规变更监控与通知
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    合规性审查与咨询
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-linear-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
              <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                其他专业服务
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">银行开户协助</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">商业许可申请</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">虚拟办公地址服务</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">商标注册服务</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">商业计划书撰写</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">专业运营咨询</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Credentials Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">专业团队</h3>
            <p className="text-xl text-gray-600">资深专家为您保驾护航</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-4 rounded-full mr-4">
                      <svg
                        className="w-8 h-8 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800">
                      资深运营专家
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    我们的团队由拥有多年运营管理经验的资深专家组成，精通各类企业美国公司运营管理，确保每个案例都得到专业、细致的处理。
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-4 rounded-full mr-4">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800">
                      20年+国际经验
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    超过20年的国际电商运营经验，深入了解跨境业务的复杂性和特殊需求，为您的国际业务提供全方位的财务支持。
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      20+
                    </div>
                    <div className="text-gray-600">年行业经验</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      500+
                    </div>
                    <div className="text-gray-600">成功案例</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      98%
                    </div>
                    <div className="text-gray-600">客户满意度</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      24/7
                    </div>
                    <div className="text-gray-600">专业支持</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Policy Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-r from-green-50 to-blue-50 rounded-2xl shadow-lg p-12 border-2 border-green-200">
            <div className="flex items-start">
              <div className="bg-green-500 text-white p-4 rounded-full mr-6 shrink-0">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  7天无忧退款政策
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  我们对服务质量充满信心。如果您在服务开始后的7天内对我们的服务不满意，可以申请全额退款，无需任何理由说明。
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    7天内可申请全额退款
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    无需复杂的退款流程
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    您的满意是我们的首要目标
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section
        id="contact"
        className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-20"
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">准备开始了吗？</h3>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            让我们的专业团队为您的企业提供安全可靠的杰圆商务服务
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:info@jytech.us"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              立即咨询
            </a>
            <a
              href="tel:+14158511937"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              电话联系
            </a>
          </div>
          <p className="mt-8 text-blue-200">
            工作时间：周一至周五 9:00 - 18:00 (北京时间)
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">杰圆商务</h4>
              <p className="text-gray-400">
                专业、可靠、值得信赖的美国公司运营管理服务商
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                快速链接
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    服务内容
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-white transition-colors"
                  >
                    价格方案
                  </a>
                </li>
                <li>
                  <a
                    href="/partners"
                    className="hover:text-white transition-colors"
                  >
                    US Partner Program
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    联系我们
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                联系我们
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-gray-500 w-12 shrink-0">邮箱:</span>
                  <span>info@jytech.us</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 w-12 shrink-0">电话:</span>
                  <span>(415) 851-1937</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 w-12 shrink-0">地址:</span>
                  <span>600 California St, San Francisco, CA 94108</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; 2024 杰圆商务. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
