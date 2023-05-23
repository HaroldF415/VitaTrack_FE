import { Avatar, Typography, Card, CardBody } from "@material-tailwind/react";
import profile001 from "../../assets/profile001.png";

const Profile = () => {
  const profileData = {
    firstName: "Logan",
    lastName: "G.",
    username: "logang",
    email: "Logan.G415@gmail.com",
    age: 34,
    location: "New York City",
    diabetesType: "Type 2",
    diabetesDiagnosed: "2019",
    isControlled: true,
    bloodSugarTargets: ["Fasting: 80-100 mg/dL", "Before Meal: 90-130 mg/dL", "After Meal: < 180 mg/dL"],
    medicationInfo: "Metformin 1000mg twice a day",
    healthcareProviders: ["Dr. Jane Smith (Primary Care Physician)", "Dr. Mark Johnson (Endocrinologist)"],
    activityInfo: "Regular walking for 30 minutes daily",
    dietInfo: "Low-carb diet with portion control",
    goals: ["Maintain fasting blood sugar below 100 mg/dL", "Lose 10 pounds in 3 months"],
    achievements: ["Achieved target blood sugar levels for 30 consecutive days", "Completed a 5k charity run"],
  };

  return (
    <div className="mx-auto max-w-screen-md py-12">
      <div className="flex items-center justify-center">
        <Avatar src={profile001} alt="userProfilePic" className="rounded-full shadow" size="lg" />
      </div>

      <div className="mt-6">
        <Typography variant="h4" color="gray" className="text-center">
          {`${profileData.firstName} ${profileData.lastName}`}
        </Typography>
        <Typography variant="body" color="blue-gray" className="text-center mt-2">
          {profileData.username}
        </Typography>
      </div>

      <Card className="mt-8 p-2 border-2 border-slate-gray">
        <CardBody>
          <Typography variant="h6" color="blue-gray" className="mb-4">
            Personal Information
          </Typography>
          <ul className="list-disc pl-6">
            <li>
              <Typography variant="body" color="blue-gray">
                <strong>Email:</strong> {profileData.email}
              </Typography>
            </li>
            <li>
              <Typography variant="body" color="blue-gray">
                <strong>Age:</strong> {profileData.age}
              </Typography>
            </li>
            <li>
              <Typography variant="body" color="blue-gray">
                <strong>Location:</strong> {profileData.location}
              </Typography>
            </li>
            <li>
              <Typography variant="body" color="blue-gray">
                <strong>Diabetes Type:</strong> {profileData.diabetesType}
              </Typography>
            </li>
            <li>
              <Typography variant="body" color="blue-gray">
                <strong>Diagnosed:</strong> {profileData.diabetesDiagnosed}
              </Typography>
            </li>
            <li>
              <Typography variant="body" color="blue-gray">
                <strong>Controlled:</strong> {profileData.isControlled ? "Yes" : "No"}
              </Typography>
            </li>
          </ul>
        </CardBody>
      </Card>

      <Card className="mt-8 p-2 border-2 border-slate-gray">
        <CardBody>
          <Typography variant="h6" color="blue-gray" className="mb-4">
            Blood Sugar Information
          </Typography>
          <ul className="list-disc pl-6">
            {profileData.bloodSugarTargets.map((target, index) => (
              <li key={index}>
                <Typography variant="body" color="blue-gray">
                  {target}
                </Typography>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>

      <Card className="mt-8 p-2 border-2 border-slate-gray">
        <CardBody>
          <Typography variant="h6" color="blue-gray" className="mb-4">
            Medication Information
          </Typography>
          <Typography variant="body" color="blue-gray">
            {profileData.medicationInfo}
          </Typography>
        </CardBody>
      </Card>

      <Card className="mt-8 p-2 border-2 border-slate-gray">
        <CardBody>
          <Typography variant="h6" color="blue-gray" className="mb-4">
            Healthcare Providers
          </Typography>
          <ul className="list-disc pl-6">
            {profileData.healthcareProviders.map((provider, index) => (
              <li key={index}>
                <Typography variant="body" color="blue-gray">
                  {provider}
                </Typography>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>

      <Card className="mt-8 p-2 border-2 border-slate-gray">
        <CardBody>
          <Typography variant="h6" color="blue-gray" className="mb-4">
            Activity Information
          </Typography>
          <Typography variant="body" color="blue-gray">
            {profileData.activityInfo}
          </Typography>
        </CardBody>
      </Card>

      <Card className="mt-8 p-2 border-2 border-slate-gray">
        <CardBody>
          <Typography variant="h6" color="blue-gray" className="mb-4">
            Diet Information
          </Typography>
          <Typography variant="body" color="blue-gray">
            {profileData.dietInfo}
          </Typography>
        </CardBody>
      </Card>

      <Card className="mt-8 p-2 border-2 border-slate-gray">
        <CardBody>
          <Typography variant="h6" color="blue-gray" className="mb-4">
            Goals
          </Typography>
          <ul className="list-disc pl-6">
            {profileData.goals.map((goal, index) => (
              <li key={index}>
                <Typography variant="body" color="blue-gray">
                  {goal}
                </Typography>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>

      <Card className="mt-8 p-2 border-2 border-slate-gray">
        <CardBody>
          <Typography variant="h6" color="blue-gray" className="mb-4">
            Achievements
          </Typography>
          <ul className="list-disc pl-6">
            {profileData.achievements.map((achievement, index) => (
              <li key={index}>
                <Typography variant="body" color="blue-gray">
                  {achievement}
                </Typography>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </div>
  );
};

export default Profile;
