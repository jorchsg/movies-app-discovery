import type { Movie, Category } from "@/types/movie";

// Mock movie data with realistic information
export const movies: Movie[] = [
	{
		id: "1",
		title: "Eternal Shadows",
		synopsis: "In a dystopian future where memories can be stolen, a skilled thief must recover her own past before it's erased forever. A gripping sci-fi thriller that explores identity and consciousness.",
		releaseDate: "2024-03-15",
		runtime: 142,
		genres: ["Sci-Fi", "Thriller", "Action"],
		posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
		backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop",
		trailerYoutubeId: "dQw4w9WgXcQ",
		rating: 4.5,
		criticScore: 89,
		director: "Sarah Chen",
		cast: [
			{ id: "c1", name: "Emma Stone", character: "Maya Rivers", image: "https://i.pravatar.cc/150?img=1" },
			{ id: "c2", name: "Oscar Isaac", character: "Dr. Marcus Vale", image: "https://i.pravatar.cc/150?img=2" },
			{ id: "c3", name: "Tessa Thompson", character: "Agent Reeves", image: "https://i.pravatar.cc/150?img=3" },
		],
		platforms: [
			{ name: "Netflix", logo: "🎬" },
			{ name: "Amazon Prime", logo: "📺" },
		],
		reviews: [
			{ id: "r1", author: "John Smith", rating: 5, content: "A masterpiece of modern sci-fi cinema!", date: "2024-03-20" },
			{ id: "r2", author: "Jane Doe", rating: 4, content: "Visually stunning with a compelling narrative.", date: "2024-03-22" },
		],
	},
	{
		id: "2",
		title: "The Last Horizon",
		synopsis: "An epic space adventure following a crew of explorers as they venture beyond the known universe to find a new home for humanity. Breathtaking visuals and emotional storytelling.",
		releaseDate: "2024-05-10",
		runtime: 156,
		genres: ["Sci-Fi", "Adventure", "Drama"],
		posterUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
		backdropUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=1080&fit=crop",
		trailerYoutubeId: "dQw4w9WgXcQ",
		rating: 4.8,
		criticScore: 94,
		director: "Christopher Nolan",
		cast: [
			{ id: "c4", name: "Matthew McConaughey", character: "Captain Hayes", image: "https://i.pravatar.cc/150?img=4" },
			{ id: "c5", name: "Anne Hathaway", character: "Dr. Chen", image: "https://i.pravatar.cc/150?img=5" },
			{ id: "c6", name: "Michael Caine", character: "Professor Brand", image: "https://i.pravatar.cc/150?img=6" },
		],
		platforms: [
			{ name: "HBO Max", logo: "🎭" },
			{ name: "Apple TV+", logo: "🍎" },
		],
		reviews: [
			{ id: "r3", author: "Mike Johnson", rating: 5, content: "Nolan does it again! Absolutely brilliant.", date: "2024-05-15" },
		],
	},
	{
		id: "3",
		title: "Midnight in Paris Noir",
		synopsis: "A detective in 1940s Paris must solve a series of mysterious murders while navigating the city's underground jazz scene. Style meets substance in this neo-noir masterpiece.",
		releaseDate: "2024-02-14",
		runtime: 118,
		genres: ["Mystery", "Thriller", "Drama"],
		posterUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
		backdropUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop",
		trailerYoutubeId: "dQw4w9WgXcQ",
		rating: 4.3,
		criticScore: 85,
		director: "Denis Villeneuve",
		cast: [
			{ id: "c7", name: "Timothée Chalamet", character: "Detective Laurent", image: "https://i.pravatar.cc/150?img=7" },
			{ id: "c8", name: "Léa Seydoux", character: "Isabelle", image: "https://i.pravatar.cc/150?img=8" },
			{ id: "c9", name: "Javier Bardem", character: "Inspector Moreau", image: "https://i.pravatar.cc/150?img=9" },
		],
		platforms: [
			{ name: "Netflix", logo: "🎬" },
		],
		reviews: [
			{ id: "r4", author: "Sarah Williams", rating: 4, content: "Atmospheric and captivating.", date: "2024-02-20" },
		],
	},
	{
		id: "4",
		title: "Dragon's Keep",
		synopsis: "In a medieval fantasy world, a young blacksmith discovers she's the last dragon rider and must unite the kingdoms against an ancient evil. Epic battles and magical creatures await.",
		releaseDate: "2024-07-20",
		runtime: 165,
		genres: ["Fantasy", "Action", "Adventure"],
		posterUrl: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=500&h=750&fit=crop",
		backdropUrl: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=1920&h=1080&fit=crop",
		trailerYoutubeId: "dQw4w9WgXcQ",
		rating: 4.6,
		criticScore: 88,
		director: "Peter Jackson",
		cast: [
			{ id: "c10", name: "Zendaya", character: "Aria Forge", image: "https://i.pravatar.cc/150?img=10" },
			{ id: "c11", name: "Tom Holland", character: "Prince Aldric", image: "https://i.pravatar.cc/150?img=11" },
			{ id: "c12", name: "Cate Blanchett", character: "Queen Morgana", image: "https://i.pravatar.cc/150?img=12" },
		],
		platforms: [
			{ name: "Disney+", logo: "🏰" },
			{ name: "HBO Max", logo: "🎭" },
		],
		reviews: [
			{ id: "r5", author: "Tom Brown", rating: 5, content: "The best fantasy film in years!", date: "2024-07-25" },
		],
	},
	{
		id: "5",
		title: "Laugh Out Loud",
		synopsis: "A struggling comedian gets one last chance at stardom when a viral video changes everything. A heartwarming comedy about second chances and finding your voice.",
		releaseDate: "2024-04-01",
		runtime: 102,
		genres: ["Comedy", "Drama"],
		posterUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&h=750&fit=crop",
		backdropUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&h=1080&fit=crop",
		trailerYoutubeId: "dQw4w9WgXcQ",
		rating: 4.1,
		criticScore: 78,
		director: "Judd Apatow",
		cast: [
			{ id: "c13", name: "Chris Rock", character: "Marcus Williams", image: "https://i.pravatar.cc/150?img=13" },
			{ id: "c14", name: "Awkwafina", character: "Jenny Chen", image: "https://i.pravatar.cc/150?img=14" },
			{ id: "c15", name: "Steve Carell", character: "Agent Bob", image: "https://i.pravatar.cc/150?img=15" },
		],
		platforms: [
			{ name: "Netflix", logo: "🎬" },
			{ name: "Hulu", logo: "📡" },
		],
		reviews: [
			{ id: "r6", author: "Lisa Anderson", rating: 4, content: "Genuinely funny and touching.", date: "2024-04-05" },
		],
	},
	{
		id: "6",
		title: "Code Red",
		synopsis: "When a cyber attack threatens to shut down the world's power grids, an elite team of hackers must race against time to stop the catastrophe. Pulse-pounding action thriller.",
		releaseDate: "2024-06-15",
		runtime: 128,
		genres: ["Action", "Thriller"],
		posterUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=750&fit=crop",
		backdropUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop",
		trailerYoutubeId: "dQw4w9WgXcQ",
		rating: 4.2,
		criticScore: 82,
		director: "Michael Bay",
		cast: [
			{ id: "c16", name: "Idris Elba", character: "Jack Carter", image: "https://i.pravatar.cc/150?img=16" },
			{ id: "c17", name: "Charlize Theron", character: "Alex Stone", image: "https://i.pravatar.cc/150?img=17" },
			{ id: "c18", name: "John Boyega", character: "Tech Specialist", image: "https://i.pravatar.cc/150?img=18" },
		],
		platforms: [
			{ name: "Amazon Prime", logo: "📺" },
		],
		reviews: [
			{ id: "r7", author: "David Lee", rating: 4, content: "Non-stop action from start to finish!", date: "2024-06-20" },
		],
	},
	{
		id: "7",
		title: "Whispers in the Dark",
		synopsis: "A family moves into a Victorian mansion only to discover it's haunted by spirits with unfinished business. A chilling horror film that will keep you up at night.",
		releaseDate: "2024-10-31",
		runtime: 115,
		genres: ["Horror", "Mystery"],
		posterUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=500&h=750&fit=crop",
		backdropUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=1920&h=1080&fit=crop",
		trailerYoutubeId: "dQw4w9WgXcQ",
		rating: 4.4,
		criticScore: 86,
		director: "James Wan",
		cast: [
			{ id: "c19", name: "Vera Farmiga", character: "Sarah Mitchell", image: "https://i.pravatar.cc/150?img=19" },
			{ id: "c20", name: "Patrick Wilson", character: "David Mitchell", image: "https://i.pravatar.cc/150?img=20" },
			{ id: "c21", name: "Mckenna Grace", character: "Emily Mitchell", image: "https://i.pravatar.cc/150?img=21" },
		],
		platforms: [
			{ name: "HBO Max", logo: "🎭" },
		],
		reviews: [
			{ id: "r8", author: "Horror Fan", rating: 5, content: "Terrifying and well-crafted!", date: "2024-11-01" },
		],
	},
	{
		id: "8",
		title: "Love in Bloom",
		synopsis: "Two florists competing for the same storefront find themselves falling in love during the busiest season of the year. A charming romantic comedy with heart.",
		releaseDate: "2024-02-14",
		runtime: 98,
		genres: ["Romance", "Comedy"],
		posterUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&h=750&fit=crop",
		backdropUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1920&h=1080&fit=crop",
		trailerYoutubeId: "dQw4w9WgXcQ",
		rating: 3.9,
		criticScore: 72,
		director: "Nancy Meyers",
		cast: [
			{ id: "c22", name: "Ryan Gosling", character: "Jake", image: "https://i.pravatar.cc/150?img=22" },
			{ id: "c23", name: "Emma Watson", character: "Lily", image: "https://i.pravatar.cc/150?img=23" },
			{ id: "c24", name: "Mindy Kaling", character: "Best Friend", image: "https://i.pravatar.cc/150?img=24" },
		],
		platforms: [
			{ name: "Netflix", logo: "🎬" },
		],
		reviews: [
			{ id: "r9", author: "Romance Lover", rating: 4, content: "Sweet and delightful!", date: "2024-02-16" },
		],
	},
	{
		id: "9",
		title: "Velocity",
		synopsis: "An underground street racer must win one final race to save his family's garage from being demolished. High-octane action and stunning car chases.",
		releaseDate: "2024-08-05",
		runtime: 135,
		genres: ["Action", "Drama"],
		posterUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=750&fit=crop",
		backdropUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop",
		trailerYoutubeId: "dQw4w9WgXcQ",
		rating: 4.0,
		criticScore: 75,
		director: "Justin Lin",
		cast: [
			{ id: "c25", name: "Vin Diesel", character: "Rico", image: "https://i.pravatar.cc/150?img=25" },
			{ id: "c26", name: "Michelle Rodriguez", character: "Maya", image: "https://i.pravatar.cc/150?img=26" },
			{ id: "c27", name: "Tyrese Gibson", character: "Marcus", image: "https://i.pravatar.cc/150?img=27" },
		],
		platforms: [
			{ name: "Amazon Prime", logo: "📺" },
			{ name: "Peacock", logo: "🦚" },
		],
		reviews: [
			{ id: "r10", author: "Action Fan", rating: 4, content: "Adrenaline-pumping excitement!", date: "2024-08-10" },
		],
	},
	{
		id: "10",
		title: "The Silent Ocean",
		synopsis: "A deep-sea researcher discovers an ancient civilization beneath the waves that could change everything we know about human history. Stunning underwater cinematography.",
		releaseDate: "2024-09-12",
		runtime: 148,
		genres: ["Adventure", "Sci-Fi", "Mystery"],
		posterUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=750&fit=crop",
		backdropUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop",
		trailerYoutubeId: "dQw4w9WgXcQ",
		rating: 4.7,
		criticScore: 91,
		director: "James Cameron",
		cast: [
			{ id: "c28", name: "Sigourney Weaver", character: "Dr. Marina Cross", image: "https://i.pravatar.cc/150?img=28" },
			{ id: "c29", name: "Sam Worthington", character: "Captain Reed", image: "https://i.pravatar.cc/150?img=29" },
			{ id: "c30", name: "Zoe Saldana", character: "Navigator Kai", image: "https://i.pravatar.cc/150?img=30" },
		],
		platforms: [
			{ name: "Disney+", logo: "🏰" },
		],
		reviews: [
			{ id: "r11", author: "Cinema Buff", rating: 5, content: "Cameron's best work yet!", date: "2024-09-15" },
		],
	},
];

// Organize movies into categories
export const categories: Category[] = [
	{
		id: "popular",
		name: "Popular Now",
		movies: [movies[1], movies[3], movies[9], movies[0], movies[6]].filter((m): m is Movie => m !== undefined),
	},
	{
		id: "trending",
		name: "Trending This Week",
		movies: [movies[0], movies[5], movies[8], movies[2], movies[7]].filter((m): m is Movie => m !== undefined),
	},
	{
		id: "action",
		name: "Action & Adventure",
		movies: [movies[5], movies[8], movies[3], movies[1], movies[0]].filter((m): m is Movie => m !== undefined),
	},
	{
		id: "scifi",
		name: "Sci-Fi Favorites",
		movies: [movies[0], movies[1], movies[9]].filter((m): m is Movie => m !== undefined),
	},
	{
		id: "comedy",
		name: "Comedy & Romance",
		movies: [movies[4], movies[7]].filter((m): m is Movie => m !== undefined),
	},
	{
		id: "thriller",
		name: "Mystery & Thriller",
		movies: [movies[2], movies[5], movies[6]].filter((m): m is Movie => m !== undefined),
	},
];

export function getMovieById(id: string): Movie | undefined {
	return movies.find((movie) => movie.id === id);
}

export function getAllMovies(): Movie[] {
	return movies;
}

export function getCategories(): Category[] {
	return categories;
}
