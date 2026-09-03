import {
    InstagramLogoIcon,
    FacebookLogoIcon,
    LinkedinLogoIcon,
    YoutubeLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
    return (
        <footer className=" bg-[#1a0933] text-white">
            {/* FITGYM GIGANTE */}
            <div className="overflow-hidden bg-[#08060D]">

                <div className="mx-auto max-w-[1800px] px-4 sm:px-8 lg:px-12">

                    <h2
                        className="
                            text-center
                            text-[22vw]
                            font-black
                            leading-[0.72]
                            tracking-[-0.09em]
                            text-white
                            sm:text-[20vw]
                            lg:text-[18vw]
                        "
                    >
                        FIT
                        <span className="text-purple-500">
                            GYM
                        </span>
                    </h2>

                </div>

            </div>

                <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-10 py-7 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between xl:px-16">

                    <p>
                        © {new Date().getFullYear()} FitGym. Todos os direitos reservados.
                    </p>

                   {/* REDES SOCIAIS */}
                    <div className="mt-2 flex gap-3">

                        <a
                            href="#"
                            aria-label="Instagram"
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 text-zinc-400 transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
                        >
                            <InstagramLogoIcon
                                size={21}
                                weight="bold"
                            />
                        </a>

                        <a
                            href="#"
                            aria-label="Facebook"
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 text-zinc-400 transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
                        >
                            <FacebookLogoIcon
                                size={21}
                                weight="bold"
                            />
                        </a>

                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 text-zinc-400 transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
                        >
                            <LinkedinLogoIcon
                                size={21}
                                weight="bold"
                            />
                        </a>

                        <a
                            href="#"
                            aria-label="YouTube"
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 text-zinc-400 transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
                        >
                            <YoutubeLogoIcon
                                size={21}
                                weight="bold"
                            />
                        </a>

                    </div>

                </div>
                <div className="grid gap-14 lg:grid-cols-4">

                </div>

        


        </footer>
    );
}

export default Footer;