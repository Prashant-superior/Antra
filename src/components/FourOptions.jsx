import Option from "./Option";

const FourOptions = ({ first = "first", second = "second", third = "third", fourth = "fourth" }) => {

    return (
        <>

        <div className="flex flex-col">
            <div className="flex justify-center">
            <Option title={first} />
            <Option title={first} />
            </div>
            <div className="flex justify-center">
            <Option title={first} />
            <Option title={first} />
            </div>
        </div>


        </>
    )
}
export default FourOptions;