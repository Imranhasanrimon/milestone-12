import { Parallax, Background } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="Cover image"
            strength={-200}
        >
            <div
                className="hero md:min-h-[500px] min-h-[300px]"
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-lg bg-black bg-opacity-40 py-5 px-12">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a idnisi
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;