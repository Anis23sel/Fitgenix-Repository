import UserEvent from "./UserEvent";
import Date from "./Date";
export default function UpcomingMeetings (){
    return(
    <>
        <div className="bg-white font-black text-lg rounded-md ">
            <div className="m-2">
                <h1>Upcoming Meetings</h1>
            </div>   
            <div>
                <Date />
            </div>
            <div className="m-3">
                <UserEvent />
                <UserEvent />
                <UserEvent />
                <UserEvent />
                <UserEvent />
            </div>
        </div>
    </>
    )
} 