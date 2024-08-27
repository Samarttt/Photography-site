export default function Widget() {
    return (
        <div className="bg-background text-foreground min-h-screen">
            <nav className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
                <div className="text-xl font-bold">Samarth Hishobkar (Freelancer)</div>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:underline">Portfolio</a></li>
                    <li><a href="#" className="hover:underline">Book Now</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
            <section className="bg-primary-foreground text-primary py-20 text-center relative">
                <div className="absolute inset-0 z-0 bg-cover bg-center" style="background-image: url('https://placehold.co/1920x1080');"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold mb-4">Capturing Moments, Creating Memories</h1>
                    <p className="text-lg">Explore the beauty through our lens</p>
                </div>
            </section>
            <section className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-card rounded-lg overflow-hidden">
                    <img src="https://placehold.co/400x300" alt="Photo 1" className="w-full h-48 object-cover">
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">Photo Title</h3>
                        <p className="text-sm text-muted-foreground">Category</p>
                    </div>
                </div>
                <div className="bg-card rounded-lg overflow-hidden">
                    <img src="https://placehold.co/400x300" alt="Photo 2" className="w-full h-48 object-cover">
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">Photo Title</h3>
                        <p className="text-sm text-muted-foreground">Category</p>
                    </div>
                </div>
                <div className="bg-card rounded-lg overflow-hidden">
                    <img src="https://placehold.co/400x300" alt="Photo 3" className="w-full h-48 object-cover">
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">Photo Title</h3>
                        <p className="text-sm text-muted-foreground">Category</p>
                    </div>
                </div>
            </section>
            <section className="bg-primary-foreground text-primary py-10 text-center">
                <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
                <p className="mb-4">Reach out for bookings or any inquiries</p>
                <form className="flex flex-col items-center">
                    <input type="text" placeholder="Name" className="bg-input text-primary-foreground w-full p-2 rounded-md mb-2">
                    <input type="email" placeholder="Email" className="bg-input text-primary-foreground w-full p-2 rounded-md mb-2">
                    <textarea placeholder="Message" className="bg-input text-primary-foreground w-full p-2 rounded-md mb-2"></textarea>
                    <button type="submit" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-md">Send Message</button>
                </form>
            </section>
            <footer className="bg-primary-foreground text-primary text-center p-4">
                &copy; 2024 Samarth Hishobkar. All Rights Reserved.
            </footer>
        </div>
        
        
        
    )
}