//class to represent the different videos that can be chosen
class Video
{
    Name;
    Link;

    constructor(Name, Link)
    {
        this.Name = Name;
        this.Link = Link;
    }
}

//list of videos that can be chosen from
const videos =
    [
        new Video("Brecci gold and diamond shotguns", "https://www.youtube.com/embed/6KX8u9P4-sU?si=FJTgaSXlKhO1V1zP"),
        new Video("Just cause 3 gameplay", "https://www.youtube.com/embed/qLMl1RbSjfE?si=zKdLa9sH_usfQPr7"),
        new Video("Just cause 3 gameplay and youtuber scam", "https://www.youtube.com/embed/yI5kRMw0bME?si=6G1I5572AGyMleqO"),
        new Video("Der eisendrache Easter egg with randoms", "https://www.youtube.com/embed/8WnmAZ6ljeg?si=XFyP7FUhJwTaDKuB"),
        new Video("Just cause 3 more gameplay", "https://www.youtube.com/embed/RB1hCzSl87I?si=3WHvKqyIbPmZeY8P"),
        new Video("Need for speed throwback", "https://www.youtube.com/embed/9KdQthhtpIE?si=ClV7Co2T21O74m3Y"),
        new Video("Yu gi oh game", "https://www.youtube.com/embed/haeggxes_Ws?si=KoST4Fz_a9kyGkJt"),
        new Video("2 challenge", "https://www.youtube.com/embed/MCL4ignnj9Q?si=XQbk4BWvevCMebMj"),
        new Video("Just cause 3 sick cars", "https://www.youtube.com/embed/yz8rrkQEWMc?si=zGov9j3E2AnK43xi"),
        new Video("Wheres the love", "https://www.youtube.com/embed/0CxYGQynZp4?si=XJ197rlO1DhC6cl8"),
        new Video("Just cause 3 what is wrong with me", "https://www.youtube.com/embed/Fg0KKA2epC4?si=WAo6E3TNgATugezM"),
        new Video("Just cause 3 what have I done", "https://www.youtube.com/embed/LnLCeq2_tkg?si=9cGIfy51AtDI4Iy1"),
        new Video("Mcree player?", "https://www.youtube.com/embed/Bs5Uh0ztZEA?si=T10t8NmmjfFCbdeM"),
        new Video("Pharah player?", "https://www.youtube.com/embed/_rtbq7qR160?si=f0N9KzcuzrSn6OHB"),
        new Video("Reaper player?", "https://www.youtube.com/embed/O2BCfGx0Bf8?si=sd3NxTW2exkKOh-1"),
        new Video("Solder 76 player?", "https://www.youtube.com/embed/V1EDod_7-LE?si=1eiMlxA6n5f8pvwn"),
        new Video("Sombra player?", "https://www.youtube.com/embed/t_d_-JROzm8?si=Kx0__IuVVm9p4jOn"),
        new Video("Tracer player?", "https://www.youtube.com/embed/MBW4SB7_Hk4?si=x0jsAO6dbxtOYgq5"),
        new Video("Dva strategy?", "https://www.youtube.com/embed/vF74ynZchCA?si=E5QMmpBUxh9513gA"),
        new Video("Bastion player?", "https://www.youtube.com/embed/-mMYmgzid_U?si=0MwXHoYZvfFWXgNt"),
        new Video("Hanzo player?", "https://www.youtube.com/embed/cDxOWpHydA8?si=Lz9OD9cEa3UM7xOp"),
        new Video("Junkrat player?", "https://www.youtube.com/embed/-Q_z2XY777I?si=aOhm5vwUG2cMJ6lW"),
        new Video("Mei player?", "https://www.youtube.com/embed/EJ-lEoS7yjo?si=ZBo0UPvCWjmuTwQP"),
        new Video("Torbjorn player?", "https://www.youtube.com/embed/U40F9F6JXhY?si=90pkpjycyZsgF1i-"),
        new Video("Widow player?", "https://www.youtube.com/embed/pE8NWe30jhY?si=NCHIbyuwHGvbidjJ"),
        new Video("D.va player?", "https://www.youtube.com/embed/6EQB4UBu_gU?si=CMCMIJmtP9SiOQCd"),
        new Video("Orisa player?", "https://www.youtube.com/embed/x8JQ9aQLpRc?si=w6Ju_6ady5KF8ZiT"),
        new Video("Roadhog player?", "https://www.youtube.com/embed/uSAAnNTSRfk?si=--M3TwJhltmotoBi"),
        new Video("Winston player?", "https://www.youtube.com/embed/pREHUNd3ojM?si=agVKBYQVekcpfOxU"),
        new Video("Origins remastered stream", "https://www.youtube.com/embed/f7RJ4DD7C0c?si=CUIAwTLafYsW1eQ-"),
        new Video("Kino der toten remastered stream", "https://www.youtube.com/embed/TXVht2ECpcA?si=bfYC_wPXltcn7Ba6"),
        new Video("Origins ending cutscene with Exo", "https://www.youtube.com/embed/yoZ7--17dLA?si=lPcv0rBvtzbhxiS9"),
        new Video("Moon Easter egg attempt with Exo", "https://www.youtube.com/embed/UyGqN9RxmRc?si=uVnbCIGlADCEyxtn"),
        new Video("Moon Easter egg attempt with Exo pt2", "https://www.youtube.com/embed/5jMjyXvXSFg?si=dBqgXh-9Rmxlw121"),
        new Video("Random Perk Challenge origins", "https://www.youtube.com/embed/xGC9PTQzR4E?si=I_MvqjhM9TF4HI8-"),
        new Video("On a quest for glory", "https://www.youtube.com/embed/N2tqbH5BZRc?si=9b55YVXBbEi610us"),
        new Video("Zarya player?", "https://www.youtube.com/embed/61sVaxecJn0?si=PWN0RpduCUcJe_67"),
        new Video("Ana player?", "https://www.youtube.com/embed/KlLgtuc9h2c?si=L7tQf0EMwFZeC-p1"),
        new Video("Lucio player?", "https://www.youtube.com/embed/69tD6qKy1vE?si=aQg71hTahK9-T-tQ"),
        new Video("Mercy player?", "https://www.youtube.com/embed/dkVhcvgXhJM?si=EYhF9SpwJbT2DhCe"),
        new Video("Symetra player?", "https://www.youtube.com/embed/iMEUzYfpZIo?si=H3ZKwQe7owJf3cyY"),
        new Video("Zenyatta player?", "https://www.youtube.com/embed/AZtSPgasKqQ?si=JfIqAxUwZmqCMRdA"),
        new Video("Origins two box challenge", "https://www.youtube.com/embed/OmtstGSXDuY?si=FwgvsS6Yg0cTYheF"),
        new Video("Kool zenyatta idea", "https://www.youtube.com/embed/rVYNrH7Ouwg?si=knvP90rsxcr-2d_E"),
        new Video("Oh jeez", "https://www.youtube.com/embed/c93phGeDz1g?si=uVdvFYs8roUd_Jt1"),
        new Video("Working to the Iowa", "https://www.youtube.com/embed/2TikaO4y0_U?si=IU8P9Bixvh_-Ez6W"),
        new Video("Five Nights at Freddy's is on PS4 (Live streamed)", "https://www.youtube.com/embed/eLhFUgaMGFE?si=E--LpUPlu0So3V8Y"),
        new Video("Five Nights at Freddy's 2 Stream", "https://www.youtube.com/embed/CLBKzQ8CSHw?si=_uONJCAN4Pme8uOb"),
        new Video("Overwatch comp on alt tank?", "https://www.youtube.com/embed/v5vcJfFiZZ4?si=CNxyjCRaX5DVcX3z"),
        new Video("Overwatch comp on alt account?", "https://www.youtube.com/embed/IVAcEdO6Ou0?si=1tAUYTvcvg1wKqF-"),
        new Video("Overwatch comp on alt dps?", "https://www.youtube.com/embed/mVEb7xB_xVE?si=i3HRxN9ju25a5q9x"),
        new Video("rekcaHemaG my alt account", "https://www.youtube.com/embed/drEeQVNI_Jg?si=ebiayU8Fo5lXiafz"),
        new Video("New hero bans", "https://www.youtube.com/embed/ce9nfEm-YvE?si=4S-c9Ut_54EvPuGo"),
        new Video("Minecraft live stream:fresh start", "https://www.youtube.com/embed/35SNYI467T0?si=d_0OEkrkhtvQcaOl"),
        new Video("Minecraft live stream:the Skeleton Grinder", "https://www.youtube.com/embed/4gviFMO_x2U?si=3nvpS-ypk6GrjrEe"),
        new Video("Origins Easter Egg Speed run!", "https://www.youtube.com/embed/vxcRPb8skVA?si=t3CDsDDqFfUw88uz"),
        new Video("Minecraft survival live finishing farming module", "https://www.youtube.com/embed/ZFYcMScbuxc?si=emZkExX_3E5GHnQ3"),
        new Video("Accretion Coaching Fre_Zex", "https://www.youtube.com/embed/FZwaAlFYSyU?si=3Q9DJ80ojo0vm3IC"),
        new Video("Ascension High Round Stream", "https://www.youtube.com/embed/rJvBdzRmauA?si=YLiFNjy3oLkqxQsF"),
        new Video("Ascension High Round Stream 2", "https://www.youtube.com/embed/hSCzxHOdZSQ?si=6uobCsQHZFpC_Mf-"),
        new Video("Ascension High Round Stream 3", "https://www.youtube.com/embed/51RLRMzu6WI?si=UOnGF0qtLesEsisU"),
        new Video("Ascension High Round Stream 4", "https://www.youtube.com/embed/pNzfg8KFFaU?si=A7ExgikXsyu2ZYb4"),
        new Video("Ascension High Round Stream 5", "https://www.youtube.com/embed/a8lbn9Jz-8w?si=XGvk4N3wtngiNeo_"),
        new Video("Bastion embarrassment", "https://www.youtube.com/embed/Q40b6NdPLR0?si=iSVc_xmg7NwnJ5qp"),
        new Video("Overwatch clips #1", "https://www.youtube.com/embed/ebhROgyztSs?si=H3jp6PrJRUqRiyzb"),
        new Video("Crazy Moments pt2", "https://www.youtube.com/embed/jdDvFF7GZEc?si=93fabTLUAsE1ysOS"),
        new Video("more clips*", "https://www.youtube.com/embed/aLKxV9gCzeA?si=EiBVqvU1KF0EDe26"),
        new Video("reinhardt upgraded?!*", "https://www.youtube.com/embed/sbCnXvFCoOI?si=74ZUa3Wjze0HyZEM"),
        new Video("sombra tips*", "https://www.youtube.com/embed/b8G_s8JjfN0?si=HBw8qjdYyIjjeuFr"),
        new Video("clips#5*", "https://www.youtube.com/embed/x0tAgxqCxfU?si=iJtKCtMf0glhU5rY"),
        new Video("Ow Clips", "https://www.youtube.com/embed/k729sQ-VVIg?si=zJkx1yegb0nPpZUH"),
        new Video("OW Clips...again", "https://www.youtube.com/embed/Ouzgo9rz1TY?si=B4UWdkeLYFUPkjto"),
        new Video("MGD Tycoon", "https://www.youtube.com/embed/DbNp6YLcUgc?si=2r_3nhU3Purc3CyT"),
        new Video("Clips from neo 2020", "https://www.youtube.com/embed/i-JClEBJn-c?si=PQY5NNXhZ0-GbVpS"),
        new Video("Workshop Codes from Overwatch Workshop(OLD VID)", "https://www.youtube.com/embed/7mn12SG2qpY?si=FqfPKf-7KGgDKTh2"),
        new Video("Random Rev high round strat", "https://www.youtube.com/embed/Rb2fOhDrlBk?si=1P9M7QgEo1Nmgo5o"),
        new Video("Clips...Agane", "https://www.youtube.com/embed/lfNHQ9hpE40?si=5mkoBY0xIOPxXPfT"),
        new Video("Overwatch Clips of Hog Patch", "https://www.youtube.com/embed/bTMUuuAEq4k?si=zqaW9pS3uouNgFXm"),
        new Video("World of Warships Legends Aircraft Carrier tips and general guide", "https://www.youtube.com/embed/e7lI1sO4jTs?si=GL0rk3MNhZLuuxB_"),
        new Video("Clips to get Doom Mains through tough times", "https://www.youtube.com/embed/_90LSJjb0Zs?si=dJU1thg1vVBZ7d_O"),
        new Video("The Dunkerque King pt. 1", "https://www.youtube.com/embed/0nkQ7h0ZK6k?si=SafFx6DCFc55vM3R"),
        new Video("Mega Program-Option 3 Number Base Converter", "https://www.youtube.com/embed/0jdK0Jr-7MU?si=tcKGtbUHvV-J3o0z"),
        new Video("Mega Program Option 1 Message to Number Encoder", "https://www.youtube.com/embed/ZqRxgm6gYNw?si=EwSaYUqnmcUgYicY"),
        new Video("Mega Program Option 2 Number to Message Decoder", "https://www.youtube.com/embed/rgp4PRP_Iw8?si=w09aevAhc0xRRXI0"),
        new Video("Triangle Solver Code", "https://www.youtube.com/embed/sFUy9sfa8qA?si=Lnm-2YysrtSmG4GB"),
        new Video("Rock Paper Scissors Game Code", "https://www.youtube.com/embed/wpsZ8FP-bK8?si=Tz9ImRt2FAG8W08_"),
        new Video("Employee Randomizer Code (Pizza Simulator)", "https://www.youtube.com/embed/mdHbn2UML2U?si=F4thGSt16zcItftH"),
        new Video("How to Ask a girl out code :)", "https://www.youtube.com/embed/fNmxQ467YSc?si=MtZTXQMv9gHIFY0N"),
        new Video("Hangman 1.0 prototype code", "https://www.youtube.com/embed/l5tRk4nyA_w?si=jwt0hhl6uU5j2_rj"),
        new Video("Hangman 2.0", "https://www.youtube.com/embed/58tuuC82HNQ?si=b5NJeO6K0tvHU_DA"),
        new Video("Tic-Tac-Toe", "https://www.youtube.com/embed/ygmEPOGNIIE?si=PfC6nJ34x4R1l0gF"),
        new Video("Checker's SpreadSheet - coming soon", "https://www.youtube.com/embed/UdhG4LW2w7o?si=ecxDTnOM0ADCBvQz"),
        new Video("Data Analysis - Birthdays", "https://www.youtube.com/embed/Pzym1GeoQRg?si=MevxJilYUj6Wf9-y"),
        new Video("Checkers (Single Jump Rule) Part 1", "https://www.youtube.com/embed/6gkTb9dYnuo?si=JkL7Z6K3DDHY8zSB"),
        new Video("Checkers (Single Jump Rule) Part 2", "https://www.youtube.com/embed/iUvgX36qqsc?si=uQf1-79byvu0vPom"),
        new Video("Custom Base Converter - (Hunterian Base)", "https://www.youtube.com/embed/l1TTyFK_ELs?si=ZZnQfjpYRWwzp6Ml"),
        new Video("Overwatch Hero Ban System", "https://www.youtube.com/embed/rfgskTj83ic?si=-1mrcdErdl7IQeCX"),
        new Video("Call of Duty Mystery Box Odds (BabyGun on Shang-ri-la)", "https://www.youtube.com/embed/1jVmtcEZRnc?si=Rid5PdP0MvbOI1E0"),
        new Video("Cypher Algorithm", "https://www.youtube.com/embed/6SHwJvIC7Zc?si=gUnxCBKbfK0qtmDo"),
        new Video("Pokemon 1v1 Battle Code", "https://www.youtube.com/embed/qL0btUobBBE?si=rhQZKnghLMDM1ZPg"),
        new Video("Periodic Table Database Retrieval", "https://www.youtube.com/embed/NRP_V8JPN3E?si=NznHe_y0QRLoNRJ_"),
        new Video("Gravitational Pull Calculator (re-upload)", "https://www.youtube.com/embed/inqq2q-8puc?si=n0noBWZmK-rbJEdo"),
        new Video("Monopoly Spreadsheet (coming soon)", "https://www.youtube.com/embed/wJRPYpknxeo?si=tGBPCaXhNIMpJxmM"),
        new Video("Quadratic Formula Solver", "https://www.youtube.com/embed/sk3kevFv_rQ?si=2kqT_LfjUVYpkPol"),
        new Video("Five Nights at Freddy's A.I Simulation", "https://www.youtube.com/embed/a8o1b2ufSkE?si=UjvPPgtqlQNCYD_l"),
        new Video("Chess with Python", "https://www.youtube.com/embed/7r0CUCYXgy4?si=KMqREpQRqQmXUe7n"),
        new Video("Flappy Bird Recreation", "https://www.youtube.com/embed/NimaFodpwEo?si=6V8ew9qicgBtj915"),
        new Video("Rust Raid Calculator", "https://www.youtube.com/embed/-X9eXRej_CA?si=a9Rk0fb_NvFXpG_U"),
        new Video("Birthday Analysis - Web Application", "https://www.youtube.com/embed/pO6sjZSO5P4?si=PtkTPly1FnvksrN3"),
        new Video("Overwatch 2 montage #1", "https://www.youtube.com/embed/z5Fcbda0rw4?si=OrRWz3PHpJXj4C4w"),
        new Video("Monopoly Python Explained", "https://www.youtube.com/embed/k3fukNdcOpk?si=pDYUwkh32ibzhSlg"),
        new Video("Monopoly Python Showcase", "https://www.youtube.com/embed/aQzKW3lHo80?si=IodmjKSst5YYftwD"),
        new Video("Battleship in python", "https://www.youtube.com/embed/98RD77UyLVU?si=R-u4BYPEoB7Bqza0"),
        new Video("Matrix and Vector Classes in Java!", "https://www.youtube.com/embed/4bBsRv6o_ag?si=b0THD6MazD3vhVfX"),
        new Video("Population Model Database (sqlite)", "https://www.youtube.com/embed/bJbWeLQAiC4?si=jePeMeBE1D_AP-bg"),
        new Video("Matrices Website", "https://www.youtube.com/embed/VB0ceEV0jlg?si=FksRQSkjADljF4CO"),
        new Video("The GameHacker Villain Arc (Montage)", "https://www.youtube.com/embed/nuR3574f_TA?si=V9OxCdI7sLtCpqEl"),
        new Video("Playlist Player Executable", "https://www.youtube.com/embed/mKn6RGGEazw?si=ZKn-fH2XVsT6YBQE"),
        new Video("Machine Learning - emotion prediction model - exe app", "https://www.youtube.com/embed/74qQS0J5Cjs?si=oF1WOLHaoLZ1zIir"),
        new Video("First two Rust programs I have written", "https://www.youtube.com/embed/6hBuzWKSeEU?si=lsH3jZP5EtZtIebq"),
        new Video("Overwatch Map Win Percentage Tracker", "https://www.youtube.com/embed/daUhRFX1eaE?si=oHmSvayTao4GOADJ"),
        new Video("First php program (project database)", "https://www.youtube.com/embed/ruZDRGMz1UM?si=Og__8astzebKwUh8"),
        new Video("Birthday Database in PHP", "https://www.youtube.com/embed/1NYKDFjn0Fg?si=uqrG5HSbEFtJVSAC"),
        new Video("Java Fridge Database System", "https://www.youtube.com/embed/K56Pb6cO57w?si=8TiJtnUO7ju7UhuC"),
        new Video("Zombies High Rounds Database System", "https://www.youtube.com/embed/MLtVwfP8uxc?si=zwyT6-6KNqpLkV1h"),
        new Video("Music Database System", "https://www.youtube.com/embed/wX6tKnwgP6k?si=O4OS06h5osZO-W60"),
        new Video("Random 3D Maze Game Showcase", "https://www.youtube.com/embed/cvvRWUAtGp4?si=n30hNPsI9Ulf13Q5"),
        new Video("Resultant Vector Calculator Executable", "https://www.youtube.com/embed/gUhOJQEjcyA?si=yQmoY_lxJQnB_825"),
        new Video("Resultant Vector Calculator V2.0 Executable", "https://www.youtube.com/embed/BWk4ugt2L18?si=dfitdugv19LzIqI7"),
        new Video("Car Database Management System (C)", "https://www.youtube.com/embed/BUxjYq0Hpp4?si=fr56xdovLb9Lj8LK"),
        new Video("File Sharing Database Server", "https://www.youtube.com/embed/_qEhEJIJNeY?si=-UvkyYuMJZQ6wykV"),
        new Video("Matchmaking Database Management System (JavaScript)", "https://www.youtube.com/embed/DW95kXc1Y0E?si=qmq1eiYAJyeDyuqM"),
        new Video("WinForms Song Database Viewer", "https://www.youtube.com/embed/xbZQ6AfgK7I?si=afaFFAiDchVG35aa"),
        new Video("Car Dealership DBMS w/ WPF", "https://www.youtube.com/embed/VBJjLyopTgY?si=9SBtpISSMKOxGmTx"),
        new Video("Custom MIPS Assembler in Python", "https://www.youtube.com/embed/97EkooneuHE?si=Tx7DZsFKpmKTL7wt")
    ];

//function to give the user a random video
function RandomVideo()
{
    //if there is no iframe on the page yet
    if(document.getElementById("homeVideo") == null)
    {
        //create the iframe
        let videoFrame = document.createElement("iframe");
        videoFrame.setAttribute("id", "homeVideo");
        videoFrame.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
        videoFrame.setAttribute("width", "strict-origin-when-cross-origin");
        videoFrame.setAttribute("height", "strict-origin-when-cross-origin");
        videoFrame.setAttribute("allowfullscreen", "true");
        videoFrame.setAttribute("title", "YouTube video player");

        //create the video header
        let videoHeader = document.createElement("h3");
        videoHeader.setAttribute("id", "homeVideoHeader");
            videoHeader.setAttribute("class", "homeVideoHeader");

        //add both to the main
        document.getElementById("HomeMain").appendChild(videoHeader);
            document.getElementById("HomeMain").appendChild(document.createElement("br"));
        document.getElementById("HomeMain").appendChild(videoFrame);
    }

    //regardless at this point there is an iframe on the page
    //get the current video object
    const currentVideo = new Video(
        document.getElementById("homeVideoHeader").innerText,
        document.getElementById("homeVideo").getAttribute("src"));

    //get a random video object, set the video header to the name and the iframe src to the link
    let randomVideo = videos[Math.floor(Math.random() * videos.length)];
    while(randomVideo.Name === currentVideo.Name && randomVideo.Link === currentVideo.Link)
    {
        let randomVideo = videos[Math.floor(Math.random() * videos.length)];
    }

    //set the values of the attributes on the page here
    document.getElementById("homeVideoHeader").innerText = randomVideo.Name;
    document.getElementById("homeVideo").setAttribute("src", randomVideo.Link)
}