/* eslint-disable @typescript-eslint/no-explicit-any */



const MainLayout = ({children}: any) => {
    return (
        <div className="flex flex-col min-h-screen">
        <header className="bg-gray-600 text-white p-4 text-center">
            <h1 className="text-2xl font-bold">Header - Your Website Name</h1>
            {/* Navigation links can be added here */}
        </header>

        <main className="flex-1 container mx-auto p-4">
            <section>
                <h2 className="text-2xl font-bold">Main Content Area</h2>
                {children}
            </section>
        </main>

        <footer className="bg-gray-600 text-white p-4 text-center">
            <p>&copy; {new Date().getFullYear()}  All rights reserved.</p>
            {/* Footer links and information can be added here */}
        </footer>
    </div>
    );
};

export default MainLayout;