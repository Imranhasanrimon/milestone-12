
const Cover = ({ img, title, subTitle }) => {
    return (
        <div
            className="hero md:min-h-[500px] min-h-[300px]"
            style={{
                backgroundImage: `url(${img})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-lg bg-black bg-opacity-40 py-5 px-12">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">
                        {subTitle}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cover;