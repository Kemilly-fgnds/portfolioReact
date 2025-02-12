import { GithubLogo } from '@phosphor-icons/react';
import { Github, Linkedin, ExternalLink, Code2, Palette, Rocket, ChevronDown } from 'lucide-react';

function App() {

    let data = new Date().getFullYear()

    const projects = [
        {
            title: "Inova Med",
            description: "Sistema de CRM para clínicas médicas que facilita o cadastro de pacientes e consultas.",
            tags: ["Java", "Spring Boot", "MySQL", "TypeScript", "React", "TailwindCSS"],
            image: "https://i.imgur.com/wUHcxlN.jpg",
            link: "https://inovamed-xi.vercel.app/",
            codigo: "https://github.com/Projeto-Integrador-grupo-4-Modelo"
        },
        {
            title: "Blog Pessoal",
            description: "Blog interativo que possibilita o cadastro de postagens.",
            tags: ["Java", "Spring Boot", "MySQL", "TypeScript", "React", "TailwindCSS"],
            image: "https://i.imgur.com/w0JVYOT.png",
            link: "https://blogpessoalreact-eta.vercel.app/",
            codigo: "https://github.com/Projeto-Integrador-grupo-4-Modelo"
        },
        {
            title: "Sistema de RH",
            description: "Sistema de Recursos Humanos que facilita a gestão e controle de funcionários.",
            tags: ["TypeScript", "React", "TailwindCSS"],
            image: "https://i.imgur.com/0bHeza6.png",
            link: "https://github.com/Projeto-Integrador-grupo-4-Modelo/rh-frontend/tree/main",
            codigo: "https://github.com/Projeto-Integrador-grupo-4-Modelo/rh-frontend/tree/main"
        }
    ];

    return (
        <div className="min-h-screen">
            <header className="min-h-screen flex flex-col justify-center relative">
                <div className="container mx-auto px-4 py-20">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h1 className="text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-600 leading-[1.6]">
                            Kemilly Fagundes da Silva
                        </h1>

                        <p className="text-2xl text-pink-200/80">
                            Desenvolvedora FullStack
                        </p>

                        <div className="flex justify-center space-x-6 pt-8">
                            <a
                                href="https://github.com/Kemilly-fgnds"
                                target="_blank"
                                className="p-3 rounded-full bg-gray-800/50 hover:bg-cyan-900/50 transition-colors"
                            >
                                <Github size={24} className="text-fuchsia-500" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/kemilly-fagundes-da-silva/"
                                target="_blank"
                                className="p-3 rounded-full bg-gray-800/50 hover:bg-cyan-900/50 transition-colors"
                            >
                                <Linkedin size={24} className="text-fuchsia-500" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown size={32} className="text-fuchsia-500" />
                </div>
            </header>

            <section className="py-32">
                <div className="container mx-auto px-2 py-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-5xl mx-auto">
                            <div className="bg-gray-900/50 backdrop-blur-lg p-8 rounded-2xl neon-border card-hover">
                                <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-600 leading-[1.6]">
                                    Sobre mim
                                </h2>
                                <p className="text-2xl text-pink-200/80 text-left">
                                    Estudante do 4º semestre de Análise e Desenvolvimento de Sistemas,
                                    com certificação Microsoft Azure-900 e certificado em AWS Cloud e Inteligência Artificial.
                                    Possuo experiência em suporte técnico e rotinas administrativas.
                                    Atualmente, estou em transição para a área de tecnologia, com foco em Desenvolvimento Fullstack,
                                    e recentemente concluí o bootcamp de Desenvolvimento Fullstack Java pela Generation Brasil com carga
                                    horária de 480h. Sou uma pessoa comunicativa, que trabalha bem em equipe e aprende rapidamente novas
                                    tecnologias. Tenho um pensamento analítico e criativo, além de ser persistente na busca por soluções
                                    eficientes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-600 leading-[1.6]">
                        Tecnologias
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-gray-900/50 backdrop-blur-lg p-8 rounded-2xl neon-border card-hover">
                            <Code2 className="w-12 h-12 mb-6 text-fuchsia-500" />
                            <h3 className="text-2xl font-bold mb-4 text-pink-100">BackEnd</h3>
                            <p className="text-gray-400">Java.</p>
                            <p className="text-gray-400">Spring Boot.</p>
                            <p className="text-gray-400">SQL.</p>
                        </div>
                        <div className="bg-gray-900/50 backdrop-blur-lg p-8 rounded-2xl neon-border card-hover">
                            <Palette className="w-12 h-12 mb-6 text-fuchsia-500" />
                            <h3 className="text-2xl font-bold mb-4 text-pink-100">FrontEnd</h3>
                            <p className="text-gray-400">HTML.</p>
                            <p className="text-gray-400">CSS.</p>
                            <p className="text-gray-400">JavaScript.</p>
                            <p className="text-gray-400">TypeScript.</p>
                            <p className="text-gray-400">React.</p>
                            <p className="text-gray-400">Tailwind Css.</p>
                        </div>
                        <div className="bg-gray-900/50 backdrop-blur-lg p-8 rounded-2xl neon-border card-hover">
                            <Rocket className="w-12 h-12 mb-6 text-fuchsia-500" />
                            <h3 className="text-2xl font-bold mb-4 text-pink-100">Computação em Nuvem</h3>
                            <p className="text-gray-400">Azure-900.</p>
                            <p className="text-gray-400">AWS Cloud.</p>
                            <p className="text-gray-400">AI-900.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-600 leading-[1.6]">
                        Projetos em Destaque
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {projects.map((project, index) => (
                            <div key={index} className="group relative bg-gray-900/30 rounded-2xl overflow-hidden card-hover">
                                <div className="aspect-w-16 aspect-h-9">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="p-6 space-y-4">
                                    <h3 className="text-xl font-bold text-pink-200">{project.title}</h3>
                                    <p className="text-gray-400">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="px-3 py-1 bg-cyan-900/30 rounded-full text-fuchsia-600 text-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            className="inline-flex items-center text-fuchsia-600 hover:text-fuchsia-600 hover:underline transition-colors"
                                        >
                                            Ver projeto <ExternalLink size={16} className="ml-2" />
                                        </a>
                                        <a
                                            href={project.codigo}
                                            target="_blank"
                                            className="inline-flex items-center text-fuchsia-600 hover:text-fuchsia-600 hover:underline transition-colors"
                                        >
                                            Código-fonte <GithubLogo size={16} className="ml-2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center text-gray-400">
                        <p>&copy; {data} Kemilly Fagundes da Silva</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;