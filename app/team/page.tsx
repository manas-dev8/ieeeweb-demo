'use client'

import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
}

const patMembers: TeamMember[] = [
  {
    name: "Prof. Dr. Avadhesh kuamr",
    role: "Vice-Chair UP Section/Pro Vice Chancellor",
    image: "/placeholder.svg?height=300&width=300",
    bio: "John is a final year Computer Science student with a passion for AI and robotics.",
    email: "john.doe@ieee.org"
  },
  {
    name: "Dr. Aanjey Mani Tripathi",
    role: "IEEE Counselor",
    image: "/placeholder.svg?height=300&width=300",
    bio: "John is a final year Computer Science student with a passion for AI and robotics.",
    email: "john.doe@ieee.org"
  },
];

const boardMembers: TeamMember[] = [

  {
    name: "Shubhranshu S. Dash",
    role: "Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1739005300/shubhranshu_hfxnd7.png",
    bio: "As Chairperson of the IEEE Student Branch, Shubhranshu leads the branch by managing operations, fostering collaboration among members, and driving initiatives that encourage technical and professional development. His leadership ensures the organization achieves its goals effectively.",
    email: "shubhranshudash@ieee.org"
  },
  {
    name: "Anurag Kumar Singh",
    role: "Vice Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1739005302/anurag_brdjdq.png",
    bio: "Serving as Vice Chairperson, Anurag plays a pivotal role in supporting the Chairperson and managing branch activities. He actively contributes to planning events and initiatives while ensuring smooth execution to promote member engagement.",
    email: "aunragkumarsingh@ieee.org"
  },
  {
    name: "Rashi Bajpai",
    role: "General Sceretary",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1739005317/rashi_egtnjx.png",
    bio: "As Secretary of the IEEE Student Branch, Rashi is responsible for maintaining accurate records of meetings, correspondence, and events. She ensures clear communication across teams and keeps the branch organized.",
    email: "rashibajpai@ieee.org"
  },
  {
    name: "Manas Saxena",
    role: "Tech Lead (Web Master)",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1739005722/manas_2_xhetvq_c_crop_ar_9_16_gdeaww.png",
    bio: "Manas, the Technical Lead, specializes in overseeing technical projects and fostering innovation within the branch. He provides technical guidance, organizes workshops, and ensures members stay updated with the latest trends in technology.",
    email: "manassaxena@ieee.org"
  },
  {
    name: "Siddharth Agrawal",
    role: "Treasurer in General",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1739005304/sidharth_de2vhl.png",
    bio: "John is a final year Computer Science student with a passion for AI and robotics.",
    email: "As Treasurer, Siddharth manages the financial operations of the IEEE Student Branch. He handles budgeting, expense tracking, and funding allocation to support the branch's activities effectively."
  },
  // Add 4 more board members here
];

// const executiveCommittee: TeamMember[] = [
//   {
//     name: "Jane Smith",
//     role: "Event Coordinator",
//     image: "/placeholder.svg?height=300&width=300",
//     bio: "Jane is an Electronics major who loves to organize tech events and workshops.",
//     email: "jane.smith@ieee.org"
//   },
//   // Add 20 more executive committee members here
// ];

const subCommunityA: TeamMember[] = [

  {
    name: "Gaurang Pant",
    role: "Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/c_crop,w_700/v1738003439/IMG-20250126-WA0044_t0oevi.jpg",
    bio: "As Chair of the IEEE Computer Society, Gaurang leads the team in promoting advancements in computer science and technology. He organizes events and workshops to enhance members' technical skills and industry knowledge..",
    email: "gaurangpant22@ieee.org"
  },
  {
    name: "Anant Gangwar",
    role: "Vice chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/c_crop,w_1774,g_auto/v1738003440/IMG_3774_uliwpd.jpg",
    bio: "Anant, as Vice Chairperson, supports the Chair in managing society operations. He focuses on creating opportunities for members to explore new technological domains and improve their skills.",
    email: "anantgangwar06@ieee.org"
  },
  {
    name: "Kshitij Bajpai",
    role: "Secretary",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003443/Kshitij_Bajpai_l80ddc.jpg",
    bio: "Serving as Secretary, Kshitij is responsible for keeping accurate records and facilitating clear communication within the IEEE Computer Society. His role ensures efficient coordination across all activities.",
    email: "kshitijbajpai@ieee.org"
  },
  {
    name: "Mohammad Sahil",
    role: "Treasurer",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003440/prof_pic_qivdks.heic",
    bio: "As Treasurer, Mohammad handles the financial operations of the society. He ensures proper budget allocation and funding for events, contributing to the success of various initiatives.",
    email: "ms9811151061@gmail.com"
  },
  // Add 4 more members for Sub-Community A
];

const subCommunityB: TeamMember[] = [
  {
    name: "Shubham Pal",
    role: "Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003441/Shubham_Pal_rmy0ew.jpg",
    bio: "As Chairperson of IEEE IAS, Shubham oversees the society’s activities, focusing on industrial applications of engineering. His leadership is instrumental in bridging the gap between academics and industry for the members.",
    email: "shubham0568@ieee.org"
  },
  {
    name: "Adarsh Upadhyay",
    role: "Vice Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003438/IMG-20241123-WA0097_lhev01.jpg",
    bio: "Adarsh, as Vice Chairperson, supports the Chairperson in organizing events and projects. He focuses on enhancing member participation and ensuring the society meets its objectives efficiently.",
    email: "adarsh265@ieee.org"
  },
  {
    name: "Urvashi Rawat",
    role: "Secretary",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003438/Urvashi_Rawat__nf8vls.jpg",
    bio: "As Secretary of IEEE IAS, Urvashi is the backbone of administrative operations. She ensures smooth coordination, documentation, and communication within the society.",
    email: "urvashirawat@ieee.org"
  },
  {
    name: "Ashish Kumar",
    role: "Web Master",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003440/IMG-20241116-WA0005_jhkcrw.jpg",
    bio: "Ashish, the Web Master of IEEE IAS, is responsible for guiding technical initiatives and projects. He organizes technical workshops, webinars, and events to inspire innovation and learning among members.",
    email: "ashishbhardwaj@ieee.org"
  },
  {
    name: "Anant Chaubey",
    role: "Treasurer",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003446/Anant_chaubey__agfguw.jpg",
    bio: "Anant, as Treasurer, manages the financial aspects of IEEE IAS. He oversees budgeting, fundraising, and allocation of resources to ensure the smooth execution of society events.",
    email: "anant92@ieee.org"
  },
  // Add 4 more members for Sub-Community B
];

const subCommunityC: TeamMember[] = [
  {
    name: "Monica Singh",
    role: "Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003442/IMG-20250126-WA0021_wzt0kg.jpg",
    bio: "Monica, as Chairperson, leads the IEEE WIE group with a vision to empower women in engineering and technology. She organizes initiatives to inspire and support women pursuing technical careers.",
    email: "mona_13@ieee.org"
  },
  {
    name: "Yashi Katiyar",
    role: "Vice Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003437/Yashi_Katiyar_eso00p.jpg",
    bio: "Yashi serves as Vice Chair, working closely with the Chairperson to manage operations and promote the growth of WIE. She helps in strategizing and implementing impactful programs for members.",
    email: "yashikatiyar@ieee.org"
  },
  {
    name: "Tanisha Bhatnagar",
    role: "Secretary",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003443/IMG_20250126_210124_b2c9ah.jpg",
    bio: "As Secretary of IEEE WIE, Tanisha plays a key role in maintaining communication and organizing events. She ensures accurate documentation and smooth operations within the team.",
    email: "tanishabhatnagar2703@ieee.org"
  },
  {
    name: "Anjali Yadav",
    role: "Treasurer",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003446/SAVE_20250126_210851_sngoeg.jpg",
    bio: "Anjali, as Treasurer, manages the financial aspects of WIE. She ensures efficient use of resources to support the society’s initiatives and events.",
    email: "anjaliyadav@ieee.org"
  },
  {
    name: "Arya Amoriya",
    role: "Outreach Lead",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003445/Arya_Amoriya__r7hcbx.jpg",
    bio: "As Outreach Lead, Arya is responsible for building connections with external organizations and promoting WIE’s activities. She ensures the group’s visibility and engagement within the community.",
    email: "aryaamoriya@ieee.org"
  },
  // Add 4 more members for Sub-Community C
];
const subCommunityD: TeamMember[] = [
  {
    name: "Nalinish Ranjan",
    role: "Design Lead",
    image: "/placeholder.svg?height=300&width=300",
    bio: "As Design Co-Lead of the IEEE Student Branch, Nalinish Ranjan is responsible for overseeing the visual identity and creative direction of the branch. He works closely with the team to design impactful content, ensuring consistency and enhancing the branch’s outreach and engagement.",
    email: "jane.smith@ieee.org"
  },
  {
    name: "Shubh Sinha",
    role: "Design Co-Lead",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1740595746/shubh_omgmtn.jpg",
    bio: "As Co-Lead of the IEEE Student Branch, Saumya Sinha plays a vital role in guiding the team, driving strategic initiatives, and ensuring the successful execution of events and programs. His leadership fosters collaboration, innovation, and the overall growth of the student branch.",
    email: "saumyasinha@ieee.org"
  },
  {
    name: "Rithvik Rana",
    role: "Media Lead",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1740595750/rhitvik_e152bq.jpg",
    bio: "As Media Lead of the IEEE Student Branch, Rithvik Rana is responsible for managing the branch’s digital presence and media outreach. He ensures effective communication by creating engaging content, handling social media platforms, and promoting events and initiatives. His efforts enhance the visibility and engagement of the student branch within the community.",
    email: "rithvikrana@ieee.org"
  },
  // Add 20 more executive committee members here
];


function MemberCard({ member }: { member: TeamMember }) {
  return (
    <Dialog>
      <DialogTrigger>
        <Card className="bg-white bg-opacity-40 backdrop-blur-md rounded-xl shadow-neumorphic hover:shadow-neumorphic-hover transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-neumorphic">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-blue-900">{member.name}</h3>
              <p className="text-blue-600 text-sm">{member.role}</p>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-neumorphic">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-900">{member.name}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-neumorphic">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
            <p className="text-gray-700 mb-4">{member.bio}</p>
            <p className="text-blue-900">
              <strong>Contact:</strong> {member.email}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {members.map((member, index) => (
        <MemberCard key={index} member={member} />
      ))}
    </div>
  )
}

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">

      <main className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">Our Team</h1>
        <Tabs defaultValue="board" className="w-auto mx-auto">
          <TabsList className="grid w-auto grid-cols-2 md:grid-cols-3 bg-blue-100 rounded-xl p-1 mb-8">
            <TabsTrigger value="PAT" className="data-[state=active]:bg-white data-[state=active]:text-blue-900">PATRONS</TabsTrigger>
            <TabsTrigger value="board" className="data-[state=active]:bg-white data-[state=active]:text-blue-900">Board</TabsTrigger>
            <TabsTrigger value="executive" className="data-[state=active]:bg-white bg-blue-100 data-[state=active]:text-blue-900">ExComm</TabsTrigger>
            {/* <TabsTrigger value="subA" className="data-[state=active]:bg-white data-[state=active]:text-blue-900">Computer Society</TabsTrigger> */}
            {/* <TabsTrigger value="subB" className="data-[state=active]:bg-white data-[state=active]:text-blue-900">Industry Applications Society</TabsTrigger> */}
            {/* <TabsTrigger value="subC" className="data-[state=active]:bg-white data-[state=active]:text-blue-900">Women in Engineering</TabsTrigger> */}
          </TabsList>
          <TabsContent value="PAT">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">PATRONS</h2>
            <TeamGrid members={patMembers} />
          </TabsContent>
          <TabsContent value="board">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Board Team</h2>
            <TeamGrid members={boardMembers} />
          </TabsContent>
          <TabsContent value="executive">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">Executive Committee</h2>
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Board Team</h2>
            <TeamGrid members={boardMembers} />
            <h2 className="text-2xl font-semibold pt-5 text-blue-900 mb-6">Computer Society</h2>
            <TeamGrid members={subCommunityA} />
            <h2 className="text-2xl font-semibold pt-5 text-blue-900 mb-6">Industry Applications Society</h2>
            <TeamGrid members={subCommunityB} />
            <h2 className="text-2xl font-semibold pt-5 text-blue-900 mb-6">Women in Engineering</h2>
            <TeamGrid members={subCommunityC} />
            <h2 className="text-2xl font-semibold pt-5 text-blue-900 mb-6">Creative Committee</h2>
            <TeamGrid members={subCommunityD} />
           
          </TabsContent>
          {/* <TabsContent value="subA">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Computer Society</h2>
            <TeamGrid members={subCommunityA} />
          </TabsContent>
          <TabsContent value="subB">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Industry Applications Society</h2>
            <TeamGrid members={subCommunityB} />
          </TabsContent>
          <TabsContent value="subC">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Women in Engineering</h2>
            <TeamGrid members={subCommunityC} />
          </TabsContent> */}
        </Tabs>
      </main>
    </div>
  )
}

