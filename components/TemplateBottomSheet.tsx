import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { forwardRef, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export type ResonateQuotesModalRef = BottomSheetModal;

const TemplateBottomSheet = forwardRef<ResonateQuotesModalRef>((props, ref) => {
    const snapPoints = useMemo(() => ["50%"], []);

    const handleGotIt = () => {
        if (ref && "current" in ref) {
            ref.current?.dismiss();
        }
    };

    return (
        <BottomSheetModal
            ref={ref}
            index={0}
            snapPoints={snapPoints}
            enableDynamicSizing={false}
            enablePanDownToClose={true}
            animateOnMount={true}
            backgroundStyle={{ backgroundColor: "#262e3d" }}
            handleIndicatorStyle={{ backgroundColor: "gray" }}
            backdropComponent={(props) => (
                <BottomSheetBackdrop
                    {...props}
                    disappearsOnIndex={-1}
                    appearsOnIndex={0}
                />
            )}
        >
            <BottomSheetView
                style={{ flex: 1, paddingHorizontal: 20, paddingBottom: 40 }}
            >
                <View className="flex-1 justify-center items-center mt-12">
                    <Text className="text-white text-3xl font-semibold text-center mt-8">
                        Get quotes that resonate with you
                    </Text>
                    <Text className="text-gray-300 text-lg text-center mt-4">
                        Personalize your feed by adding at least 5 quotes to favorites
                    </Text>
                </View>
                <View className="w-full mt-6">
                    <TouchableOpacity
                        className="bg-white w-full py-4 rounded-full items-center justify-center"
                        onPress={handleGotIt}
                    >
                        <Text className="text-black text-lg font-bold">Got it!</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheetView>
        </BottomSheetModal>
    );
});

export default TemplateBottomSheet;


// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'

// const TemplateBottomSheet = () => {
//     return (
//         <View>
//             <Text>TemplateBottomSheet</Text>
//         </View>
//     )
// }

// export default TemplateBottomSheet

// const styles = StyleSheet.create({})