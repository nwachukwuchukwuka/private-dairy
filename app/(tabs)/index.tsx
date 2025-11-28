

// import BookView from "@/components/BookView";
// import CalendarView from "@/components/CalendarView";
// import ListView from "@/components/ListView";
// import MapView from "@/components/MapView";
// import MediaView from "@/components/MediaView";
// import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";
// import React, { useState } from "react";
// import {
//   StatusBar,
//   Text,
//   TouchableOpacity,
//   View
// } from "react-native";
// import FilterScreen from "../journals/filter-screen";

// type TabName = "List" | "Calendar" | "Media" | "Map" | "Book";

// const JournalScreen = () => {
//   const router = useRouter();
//   const [activeTab, setActiveTab] = useState<TabName>("Book");
//   const [isFilterVisible, setIsFilterVisible] = useState(false);

//   const renderContent = () => {
//     switch (activeTab) {
//       case "Book":
//         return <BookView />;
//       case "List":
//         return <ListView />;
//       case "Calendar":
//         return <CalendarView />;
//       case "Media":
//         return <MediaView />;
//       case "Map":
//         return <MapView />;
//       default:
//         return null;
//     }
//   };


//   return (
//     <View className="flex-1">
//       <StatusBar barStyle="light-content" />
//       <View className="bg-[#00AEEF] pt-16 pb-8 px-4">
//         <View className="flex-row justify-between items-center mb-4">
//           <TouchableOpacity onPress={() => router.push("/journals/journals-menu")}>
//             <Feather name="menu" size={24} color="white" />
//           </TouchableOpacity>
//           <View className="flex-row items-center gap-8  ">
//             <TouchableOpacity onPress={() => router.push("/sign-in")}>
//               <Text className="text-white text-xl">
//                 Sign In
//               </Text>
//             </TouchableOpacity>
//             {/* Update this button to open the modal */}
//             <TouchableOpacity onPress={() => setIsFilterVisible(true)}>
//               <Feather name="search" size={24} color="white" />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Ionicons
//                 name="ellipsis-horizontal-circle-outline"
//                 size={26}
//                 color="white"
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <View className="w-8 h-8 rounded-full bg-gray-600 items-center justify-center">
//                 <Ionicons name="person" size={20} color="white" />
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View className="my-10">
//           <Text className="text-white text-4xl font-semibold">Journal</Text>
//           <Text className="text-white text-md">2025</Text>
//         </View>
//       </View>
//       <View className="bg-[#1C1C1E] rounded-t-[30px] flex-row justify-around items-center py-5  border-b border-gray-700 -mt-10">
//         <TouchableOpacity onPress={() => setActiveTab("Book")}>
//           <MaterialCommunityIcons name="book-open-variant" size={24} color={activeTab === 'Book' ? 'white' : 'gray'} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setActiveTab("List")}>
//           <Text className={`text-base ${activeTab === 'List' ? 'text-white font-bold' : 'text-gray-400'}`}>List</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setActiveTab("Calendar")}>
//           <Text className={`text-base ${activeTab === 'Calendar' ? 'text-white font-bold' : 'text-gray-400'}`}>Calendar</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setActiveTab("Media")}>
//           <Text className={`text-base ${activeTab === 'Media' ? 'text-white font-bold' : 'text-gray-400'}`}>Media</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setActiveTab("Map")}>
//           <Text className={`text-base ${activeTab === 'Map' ? 'text-white font-bold' : 'text-gray-400'}`}>Map</Text>
//         </TouchableOpacity>
//       </View>
//       <View className="flex-1">
//         {renderContent()}
//       </View>

//       <TouchableOpacity className="absolute bottom-28 right-5 bg-[#00AEEF] w-14 h-14 rounded-full items-center justify-center">
//         <Feather name="plus" size={32} color="white" />
//       </TouchableOpacity>

//       {/* Render the modal and control it with state */}
//       <FilterScreen
//         visible={isFilterVisible}
//         onClose={() => setIsFilterVisible(false)}
//       />
//     </View>
//   );
// };

// export default JournalScreen;



// import BookView from "@/components/BookView";
// import CalendarView from "@/components/CalendarView";
// import ListView from "@/components/ListView";
// import MapView from "@/components/MapView";
// import MediaView from "@/components/MediaView";
// import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";
// import React, { useState } from "react";
// import {
//   Modal,
//   Pressable,
//   StatusBar,
//   Text,
//   TouchableOpacity,
//   View
// } from "react-native";
// import FilterScreen from "../journals/filter-screen";

// type TabName = "List" | "Calendar" | "Media" | "Map" | "Book";

// const JournalScreen = () => {
//   const router = useRouter();
//   const [activeTab, setActiveTab] = useState<TabName>("Book");
//   const [isFilterVisible, setIsFilterVisible] = useState(false);
//   const [isMenuVisible, setIsMenuVisible] = useState(false); // State for the new menu

//   const renderContent = () => {
//     switch (activeTab) {
//       case "Book":
//         return <BookView />;
//       case "List":
//         return <ListView />;
//       case "Calendar":
//         return <CalendarView />;
//       case "Media":
//         return <MediaView />;
//       case "Map":
//         return <MapView />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <View className="flex-1">
//       <StatusBar barStyle="light-content" />
//       <View className="bg-gray-800 pt-16 pb-8 px-4">
//         <View className="flex-row justify-between items-center mb-4">
//           <TouchableOpacity onPress={() => router.push("/journals/journals-menu")}>
//             <Feather name="menu" size={24} color="white" />
//           </TouchableOpacity>
//           <View className="flex-row items-center gap-4">
//             <TouchableOpacity onPress={() => setIsFilterVisible(true)}>
//               <Feather name="search" size={24} color="white" />
//             </TouchableOpacity>
//             {/* This button now opens the menu */}
//             <TouchableOpacity onPress={() => setIsMenuVisible(true)}>
//               <Ionicons
//                 name="ellipsis-horizontal-circle-outline"
//                 size={26}
//                 color="white"
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <View className="w-8 h-8 rounded-full bg-red-500 items-center justify-center">
//                 <Text className="text-white font-bold">N</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View className="my-10">
//           <Text className="text-white text-4xl font-semibold">All Entries</Text>
//           <Text className="text-white text-md">2025</Text>
//         </View>
//       </View>
//       <View className="bg-[#1C1C1E] rounded-t-[30px] flex-row justify-around items-center py-5 border-b border-gray-700 -mt-10">
//         <TouchableOpacity onPress={() => setActiveTab("Book")}>
//           <MaterialCommunityIcons name="book-open-variant" size={24} color={activeTab === 'Book' ? 'white' : 'gray'} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setActiveTab("List")}>
//           <Text className={`text-base ${activeTab === 'List' ? 'text-white font-bold' : 'text-gray-400'}`}>List</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setActiveTab("Calendar")}>
//           <Text className={`text-base ${activeTab === 'Calendar' ? 'text-white font-bold' : 'text-gray-400'}`}>Calendar</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setActiveTab("Media")}>
//           <Text className={`text-base ${activeTab === 'Media' ? 'text-white font-bold' : 'text-gray-400'}`}>Media</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setActiveTab("Map")}>
//           <Text className={`text-base ${activeTab === 'Map' ? 'text-white font-bold' : 'text-gray-400'}`}>Map</Text>
//         </TouchableOpacity>
//       </View>
//       <View className="flex-1 bg-[#1C1C1E]">
//         {renderContent()}
//       </View>

//       <TouchableOpacity className="absolute bottom-28 right-5 bg-blue-500 w-14 h-14 rounded-full items-center justify-center">
//         <Feather name="plus" size={32} color="white" />
//       </TouchableOpacity>

//       {/* Filter Screen Modal */}
//       <FilterScreen
//         visible={isFilterVisible}
//         onClose={() => setIsFilterVisible(false)}
//       />

//       {/* Pop-up Menu Modal */}
//       <Modal
//         transparent={true}
//         visible={isMenuVisible}
//         animationType="fade"
//         onRequestClose={() => setIsMenuVisible(false)}
//       >
//         <Pressable
//           className="flex-1"
//           onPress={() => setIsMenuVisible(false)} // Close when tapping outside the menu
//         >
//           <View className="absolute top-28 right-12 bg-gray-600 rounded-xl p-2 shadow-lg">
//             <TouchableOpacity
//               className="flex-row items-center justify-between w-36 px-2 py-2"
//               onPress={() => {
//                 setIsMenuVisible(false); // Close the menu
//                 router.push('/journals/import-export-screen'); // Navigate to the modal
//               }}
//             >
//               <Text className="text-white text-lg">Export</Text>
//               <Feather name="share" size={20} color="white" />
//             </TouchableOpacity>
//           </View>
//         </Pressable>
//       </Modal>
//     </View>
//   );
// };

// export default JournalScreen;





import BookView from "@/components/BookView";
import CalendarView from "@/components/CalendarView";
import ListView from "@/components/ListView";
import MapView from "@/components/MapView";
import MediaView from "@/components/MediaView";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import FilterScreen from "../journals/filter-screen";

type TabName = "List" | "Calendar" | "Media" | "Map" | "Book";

const JournalScreen = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabName>("Book");
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "Book":
        return <BookView />;
      case "List":
        return <ListView />;
      case "Calendar":
        return <CalendarView />;
      case "Media":
        return <MediaView />;
      case "Map":
        return <MapView />;
      default:
        return null;
    }
  };


  return (
    <View className="flex-1">
      <StatusBar barStyle="light-content" />
      <View className="bg-[#00AEEF] pt-16 pb-8 px-4">
        <View className="flex-row justify-between items-center mb-4">
          <TouchableOpacity onPress={() => router.push("/journals/journals-menu")}>
            <Feather name="menu" size={24} color="white" />
          </TouchableOpacity>
          <View className="flex-row items-center gap-8 mr-16  ">
            <TouchableOpacity onPress={() => router.push("/sign-in")}>
              <Text className="text-white text-xl">
                Sign In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsFilterVisible(true)}>
              <Feather name="search" size={24} color="white" />
            </TouchableOpacity>

            <Menu>
              <MenuTrigger>
                <Ionicons
                  name="ellipsis-horizontal-circle-outline"
                  size={26}
                  color="white"
                />
              </MenuTrigger>
              <MenuOptions
                customStyles={{
                  optionsContainer: {
                    backgroundColor: '#3C3C3C',
                    borderRadius: 12,
                    marginTop: 30,
                    padding: 4,
                  },
                }}
              >
                <MenuOption onSelect={() => router.push('/import-export/import-export-screen')}>
                  <View className="flex-row items-center justify-between px-2">
                    <Text className="text-white text-lg">Export</Text>
                    <Feather name="share" size={20} color="white" />
                  </View>
                </MenuOption>
              </MenuOptions>
            </Menu>
            {/* <TouchableOpacity>
              <View className="w-8 h-8 rounded-full bg-gray-600 items-center justify-center">
                <Ionicons name="person" size={20} color="white" />
              </View>
            </TouchableOpacity> */}
          </View>
        </View>
        <View className="my-10">
          <Text className="text-white text-4xl font-semibold">Journal</Text>
          <Text className="text-white text-md">2025</Text>
        </View>
      </View>
      <View className="bg-[#1C1C1E] rounded-t-[30px] flex-row justify-around items-center py-5  border-b border-gray-700 -mt-10">
        <TouchableOpacity onPress={() => setActiveTab("Book")}>
          <MaterialCommunityIcons name="book-open-variant" size={24} color={activeTab === 'Book' ? 'white' : 'gray'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("List")}>
          <Text className={`text-base ${activeTab === 'List' ? 'text-white font-bold' : 'text-gray-400'}`}>List</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("Calendar")}>
          <Text className={`text-base ${activeTab === 'Calendar' ? 'text-white font-bold' : 'text-gray-400'}`}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("Media")}>
          <Text className={`text-base ${activeTab === 'Media' ? 'text-white font-bold' : 'text-gray-400'}`}>Media</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("Map")}>
          <Text className={`text-base ${activeTab === 'Map' ? 'text-white font-bold' : 'text-gray-400'}`}>Map</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1">
        {renderContent()}
      </View>

      <TouchableOpacity className="absolute bottom-28 right-5 bg-[#00AEEF] w-14 h-14 rounded-full items-center justify-center">
        <Feather name="plus" size={32} color="white" />
      </TouchableOpacity>

      <FilterScreen
        visible={isFilterVisible}
        onClose={() => setIsFilterVisible(false)}
      />
    </View>
  );
};

export default JournalScreen;