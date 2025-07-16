import React from 'react';

const Loading = () => {
    return (
        <main className="bg-primary-400 h-screen w-full absolute z-[1000] inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
        </main>
    );
}

export default Loading;
