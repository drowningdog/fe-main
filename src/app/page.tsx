import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Drowning Dog - 在 Gap Year 中组团做项目</title>
                <meta
                    name="description"
                    content="加入 Drowning Dog，与志同道合的人一起完成真实项目，积累经验，创造价值！"
                />
                <meta
                    name="keywords"
                    content="Drowning Dog, Gap Year, 组团做项目, 项目实战, 创造价值"
                />
                <meta name="author" content="Drowning Dog Team"/>
                <meta property="og:title" content="Drowning Dog - 在 Gap Year 中组团做项目"/>
                <meta
                    property="og:description"
                    content="加入 Drowning Dog，与志同道合的人一起完成真实项目，积累经验，创造价值！"
                />
                <meta property="og:image" content="/landingpage/group_qr.JPG"/>
                <meta property="og:url" content="https://drowning-dog.com"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Drowning Dog - 在 Gap Year 中组团做项目"/>
                <meta
                    name="twitter:description"
                    content="加入 Drowning Dog，与志同道合的人一起完成真实项目，积累经验，创造价值！"
                />
                <meta name="twitter:image" content="/landingpage/group_qr.JPG"/>
            </Head>
            <div className="min-h-screen bg-gray-100">
                {/* 导航栏 */}
                <nav className="bg-white shadow-lg">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex justify-between items-center py-4">
                            <div className="text-2xl font-bold text-blue-600">Drowning Dog</div>
                            <div className="flex space-x-4">
                                <a href="#features" className="text-gray-700 hover:text-blue-600">功能</a>
                                <a href="#testimonials" className="text-gray-700 hover:text-blue-600">用户评价</a>
                                <a href="#contact" className="text-gray-700 hover:text-blue-600">联系我们</a>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* 头部 */}
                <header className="bg-blue-600 text-white py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-4">在 Gap Year 中组团做项目</h1>
                        <p className="text-xl mb-8">加入 Drowning
                            Dog，与志同道合的人一起完成真实项目，积累经验，创造价值！</p>
                    </div>
                </header>

                {/* YouTube 视频 */}
                <section className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.youtube.com/embed/p-GsJQS-eUw"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-lg shadow-lg"
                            ></iframe>
                        </div>
                    </div>
                </section>

                {/* 功能介绍 */}
                <section id="features" className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">我们的核心价值</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-4xl mb-4">🤝</div>
                                <h3 className="text-xl font-semibold mb-2 text-blue-600">组团合作</h3>
                                <p className="text-gray-600">与来自不同背景的人组队，共同完成真实项目。</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">💡</div>
                                <h3 className="text-xl text-gray font-semibold mb-2 text-blue-600">项目实战</h3>
                                <p className="text-gray-800">通过实际项目积累经验，提升技能，丰富简历。</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">🚀</div>
                                <h3 className="text-xl font-semibold mb-2 text-blue-600">创造价值</h3>
                                <p className="text-gray-600">不仅是为了学习，更是为了创造真实的价值。</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 用户评价 */}
                <section id="testimonials" className="py-16 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">用户评价</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-gray-600 mb-4">“在 Drowning
                                    Dog，我不仅学到了新技能，还结识了一群志同道合的朋友！”</p>
                                <p className="font-semibold text-gray-600">—— 张三</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-gray-600 mb-4">“通过实际项目，我的简历变得更加有竞争力，感谢 Drowning
                                    Dog！”</p>
                                <p className="font-semibold text-gray-600">—— 李四</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 行动号召 */}
                <section id="signup" className="py-20 bg-blue-600 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">立即加入我们！</h2>
                        <p className="text-xl mb-8">与志同道合的人一起，完成真实项目，创造属于你的价值。</p>
                    </div>
                </section>

                {/* 页脚 */}
                <footer id="contact" className="bg-gray-800 text-white py-8">
                    <div className="max-w-6xl mx-auto px-4 text-center">
                        <p className="mb-4">扫描二维码联系我们：</p>
                        <img
                            src="/landingpage/group_qr.JPG" // 引用 public 目录下的二维码图片
                            alt="Drowning Dog 联系我们二维码"
                            className="mx-auto w-48" // 设置二维码图片的大小
                        />
                        <p className="mt-4">© 2025 Drowning Dog. 版权所有.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}