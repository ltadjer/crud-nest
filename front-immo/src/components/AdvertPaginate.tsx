type PropsAdvertPaginate = { totalCount: number; };
const AdvertPaginate = ({ totalCount }: PropsAdvertPaginate) => {
    return (
        <div className="paginate">
            <p>
                number of adverts: {totalCount}
            </p>
        </div>
    );
}

export default AdvertPaginate;