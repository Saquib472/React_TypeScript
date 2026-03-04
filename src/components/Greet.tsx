type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
};

export default function Greet(props: GreetProps) {
    const {messageCount = 0} = props
    return (
        <div>
            {props.isLoggedIn
                ? `Welcome ${props.name} ! You have ${messageCount === 0? 0 :props.messageCount} Unread Messages.`
                : "Welcome Guest"}
        </div>
    );
}
