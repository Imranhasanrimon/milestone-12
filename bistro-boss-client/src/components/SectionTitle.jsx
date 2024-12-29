
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-4/12 w-1/2 border-y-2 text-center mx-auto my-10 py-3">
            <p className="text-yellow-400">--- {subHeading} ---</p>
            <h2 className="md:text-3xl text-xl font-semibold uppercase">{heading}</h2>
        </div>
    );
};

export default SectionTitle;