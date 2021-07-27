import CommentsComponent from "./CommentsComponent";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="container ui comments">
        <ApprovalCard className="gicungdc">
            <CommentsComponent
            author="Huu Khai NGUYEN"
            timeAgo="Today at 4:35 PM"
            content="Best tutorial"
            rating="5 faves"
            avatar={faker.image.avatar()}
            />
        </ApprovalCard>

        <ApprovalCard>
            <CommentsComponent
            author="Marielle CHARON"
            timeAgo="Yesterday at 5:00 PM"
            content="Good choice!"
            rating="4.5 faves"
            avatar={faker.image.avatar()}
            />
        </ApprovalCard>

        <ApprovalCard>
            <CommentsComponent
            author="Jacques MIRONNEAU"
            timeAgo="Yesterday at 5:30 PM"
            content="Good choice!"
            rating="5 faves"
            avatar={faker.image.avatar()}
            />
        </ApprovalCard>

        <ApprovalCard>
            <CommentsComponent
            author="Pierre-Louis DAMBRAINE"
            timeAgo="Yesterday at 7:45 PM"
            content="Not a bad choice."
            rating="4 faves"
            avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        </div>
    );
};

export default App;
