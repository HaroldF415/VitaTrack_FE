import landingIMG from "../assets/VitaTrack002.png";

const Home = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-md py-12">
        {/* <Card className="mb-12 overflow-hidden"> */}
        {/* <img
            alt="nature"
            className="h-[34rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
          /> */}
        {/* <img alt="diabetes" className="w-full object-cover object-center sm:w-3/4 lg:w-1/2 xl:w-1/3 mb-3" src="src/assets/VitaTrack002.png" />
        </Card> */}

        <div className="mb-12 overflow-hidden flex justify-center items-center">
          <img alt="diabetes" className="w-full object-cover object-center transition-all duration-500 ease-in-out sm:w-75% lg:w-50% xl:w-33.33% mb-3" src={landingIMG} />
        </div>
        <div className="flex flex-col  items-center h-full w-full">
          <div className="text-gray-500 text-xl mb-10">
            Take control of your health with <span className="text-gray-700 text-2xl">VitaTrack</span>: Your Comprehensive Blood Sugar Tracker.
          </div>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full sm:w-auto sm:max-w-xs">
            Sign Up
          </button>

          <div className="key_features flex flex-col items-center transition-all duration-500 sm:flex-row sm:flex-wrap justify-around mt-10">
            <h2 className="text-4xl font-bold mb-12">Key Features</h2>
            <div className="grid grid-cols-1 transition-all duration-500 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <img src="src/assets/blood_sugar_tracker.png" alt="Blood Sugar Tracking" className="h-50 w-50 mb-3" />
                <h3 className="font-semibold mb-2">Blood Sugar Tracking</h3>
                <p>Track your blood sugar levels throughout the day with ease.</p>
              </div>
              <div className="flex flex-col items-center ">
                <img src="src/assets/charts_graphs.png" alt="Insights and Graphs" className="h-50 w-50 mb-3" />
                <h3 className="font-semibold mb-2">Insights and Graphs</h3>
                <p>Understand your blood sugar trends with intuitive graphs.</p>
              </div>
              <div className="flex flex-col items-center ">
                <img src="src/assets/achievements.png" alt="Achievements" className="h-50 w-50 mb-3" />
                <h3 className="font-semibold mb-2">Achievements</h3>
                <p>Stay motivated with achievements for reaching your health goals.</p>
              </div>
              <div className="flex flex-col items-center ">
                <img src="src/assets/community.png" alt="Community" className="h-50 w-50 mb-3" />
                <h3 className="font-semibold mb-2">Community</h3>
                <p>Connect with others and share your progress and keep each other accountable.</p>
              </div>
            </div>
          </div>
          <div className="integration_section flex flex-col justify-center items-center mt-10 bg-white py-10">
            <h2 className="text-4xl font-bold mb-12">Expand Your Health Tracking</h2>
            <p className="text-gray-600 text-lg mb-5">VitaTrack is designed with flexibility in mind, with the potential to integrate with your favorite third-party fitness and food recipe apps.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center">
                <img src="src/assets/fitnessApp.png" alt="Fitness App" className="h-45 w-50 mb-3" />
                <h3 className="font-semibold mb-2">Fitness Apps</h3>
                <p>Sync your workouts and track the impact on your blood sugar levels.</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="src/assets/foodRecipeApp.png" alt="Food Recipe App" className="h-50 w-50 mb-3" />
                <h3 className="font-semibold mb-2">Food Recipe Apps</h3>
                <p>Combine with your favorite recipe apps to track nutritional intake and understand how your meals affect your blood sugar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
