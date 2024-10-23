import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Profil = () => {
    const gamerProfile = {
        username: "GamerX",
        level: 42,
        bio: "Pro gamer and game reviewer.",
        avatar: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gamer-logo-design-template-7c2e7661fd6f8d96a12b26710b06dc8a_screen.jpg?ts=1637163320", 
        favoriteGames: ["Fortnite", "Minecraft", "Apex Legends"],
       
      };
  return (
    <Card style={{ width: '18rem' }} className="mx-auto mt-5 shadow-lg">
        <Card.Img variant="top" src={gamerProfile.avatar} alt="Avatar" />
        <Card.Body>
        <Card.Title>{gamerProfile.username}</Card.Title>
        <Card.Text>
            <p><strong>Level:</strong> {gamerProfile.level}</p>
            <p>{gamerProfile.bio}</p>
            <strong>Favorite Games:</strong>
            <ul>
            {gamerProfile.favoriteGames.map((game, index) => (
                <li key={index}>{game}</li>
            ))}
            </ul>
    </Card.Text>

        <Button variant="primary">View Profile</Button>
        </Card.Body>
    </Card>
)
}

export default Profil
