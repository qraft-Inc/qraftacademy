import { BsStar } from "react-icons/bs";

export default function Rating() {
    return (
        <div className=" w-35">
            <ul className="flex justify-between text-light-blue text-xl">
                <li className=" ml-0">
                    <BsStar ></BsStar>
                </li>
                <li>
                    <BsStar></BsStar>
                </li>
                <li>
                    <BsStar></BsStar>
                </li>
                <li>
                    <BsStar></BsStar>
                </li>
                <li>
                    <BsStar></BsStar>
                </li>
            </ul>
        </div>
    )
}
