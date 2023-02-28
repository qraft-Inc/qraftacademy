import Link from 'next/link';


export default function GetStarted({props}) {
    return (
        <div>
            <Link
                href={props}
                className="rounded-lg w-24 text-center text-white font-bold text-base p-2 px-4 bg-light-blue hover:bg-blue-400 transition duration-300">
                Get Started
            </Link>
        </div>
    );
}

