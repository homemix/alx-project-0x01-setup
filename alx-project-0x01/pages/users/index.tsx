import UserCard from "@/components/common/UserCard";
import {UserData, UserProps} from "@/interfaces";
import {useState} from "react";

interface UsersPageProps {
    posts: UserProps[];
}

const Users = ({ posts }: UsersPageProps) => {
    return (
        <div>
            <h1>Users List</h1>
            {posts.map((user) => (
                <UserCard key={user.id} {...user} />
            ))}
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()

    return {
        props: {
            posts
        }
    }
}
const [isModalOpen, setIsModalOpen] = useState(false);

const handleAddUser = (newUser: UserData) => {
    console.log("New user added:", newUser);
};


export default Users;
