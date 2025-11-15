import { FC } from "react";
import { UserProps } from "@/interfaces";

const UserCard: FC<UserProps> = ({
                                     name,
                                     email,
                                     phone,
                                     website,
                                     address,
                                     company,
                                 }) => {
    return (
        <div style={styles.card}>
            <h2>{name}</h2>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Website:</strong> {website}</p>

            <h4>Address:</h4>
            <p>{address.street}, {address.city}</p>

            <h4>Company:</h4>
            <p>{company.name}</p>
        </div>
    );
};

const styles = {
    card: {
        border: "1px solid #ddd",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: "#fafafa",
        boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
    },
} as const;

export default UserCard;
