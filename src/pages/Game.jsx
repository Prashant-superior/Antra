import SongBar from "../components/SongBar";
import FourOptions from "../components/FourOptions";
const Game = () => {


    return (
        <>
            <div className="flex flex-col justify-center">
                <SongBar songUrl={"https://ylntqzcdismadpijbtvq.supabase.co/storage/v1/object/sign/songs/HIindi/Tumhein%20Dil%20Lagi%20(Qawali)%20%20Ustad%20Nusrat%20Fateh%20Ali%20Khan%20%20Leo%20Twins.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb25ncy9ISWluZGkvVHVtaGVpbiBEaWwgTGFnaSAoUWF3YWxpKSAgVXN0YWQgTnVzcmF0IEZhdGVoIEFsaSBLaGFuICBMZW8gVHdpbnMubXAzIiwiaWF0IjoxNzI2NDc2Mjg2LCJleHAiOjE3NTgwMTIyODZ9.KOVcfFRh9f9uWyA1gv-CqY1cyH93gx8nYHBVvrsfxqE&t=2024-09-16T08%3A44%3A46.713Z"} />

                <div className="m-3">
                    <FourOptions />
                </div>

            </div>

        </>
    )
}

export default Game;