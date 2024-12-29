
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="w-4/12 border-y-2 text-center mx-auto my-10 py-3">
            <p className="text-yellow-400">--- {subHeading} ---</p>
            <h2 className="text-3xl font-semibold uppercase">{heading}</h2>
        </div>
    );
};

export default SectionTitle;