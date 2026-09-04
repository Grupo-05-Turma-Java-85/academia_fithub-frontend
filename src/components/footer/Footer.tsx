import {
    InstagramLogoIcon,
    FacebookLogoIcon,
    LinkedinLogoIcon,
    YoutubeLogoIcon,
} from "@phosphor-icons/react";
import { useContext, type ReactNode } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {

    const { usuario } = useContext(AuthContext);
    const token = usuario.token;

    let component: ReactNode;

    if (token !== '') {

        component = (
            <footer className="relative bg-[#08060D] text-white">

                {/* ONDA DO TOPO */}
                <div className="absolute -top-16 left-0 w-full overflow-hidden leading-none">
                    <svg
                        className="relative block h-20 w-full"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,60 C250,0 350,0 550,40 C750,80 900,90 1200,65 L1200,120 L0,120 Z"
                            fill="#08060D"
                        />
                    </svg>
                </div>

                {/* FITGYM GIGANTE */}
                <div className="overflow-hidden bg-[#08060D]">

                    <div className="mx-auto max-w-[1800px] px-4 pt-16 sm:px-8 lg:px-12">

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

                <div className="mx-auto grid max-w-[1600px] flex-col gap-6 px-10 py-7 text-xs text-white sm:flex-row sm:items-center sm:justify-center xl:px-16">

                    {/* REDES SOCIAIS */}
                    <div className="flex gap-3">

                        <a
                            href="#"
                            aria-label="Instagram"
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 text-white transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
                        >
                            <InstagramLogoIcon
                                size={21}
                                weight="bold"
                            />
                        </a>

                        <a
                            href="#"
                            aria-label="Facebook"
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 text-white transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
                        >
                            <FacebookLogoIcon
                                size={21}
                                weight="bold"
                            />
                        </a>

                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 text-white transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
                        >
                            <LinkedinLogoIcon
                                size={21}
                                weight="bold"
                            />
                        </a>

                        <a
                            href="#"
                            aria-label="YouTube"
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 text-white transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
                        >
                            <YoutubeLogoIcon
                                size={21}
                                weight="bold"
                            />
                        </a>

                    </div>

                    <p className="pl-16">
                        © {new Date().getFullYear()} FitGym.
                    </p>

                </div>

            </footer>
        );

    } else {
        component = <></>;
    }

    return (
        <>
            {component}
        </>
    );
}

export default Footer;
