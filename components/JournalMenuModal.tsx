import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { forwardRef, useMemo } from "react";
import JournalMenu from "./JournalMenu";


export type BottomSheetFileRef = BottomSheetModal;

const JournalMenuModal = forwardRef<BottomSheetFileRef>((props, ref) => {
    const snapPoints = useMemo(() => ["50%", "100%"], []);

    return (
        <BottomSheetModal
            ref={ref}
            index={0}
            snapPoints={snapPoints}
            enableDynamicSizing={false}
            enablePanDownToClose={true}
            animateOnMount={true}
            backgroundStyle={{ backgroundColor: "#1C1C1E" }}
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
                style={{ flex: 1 }}
            >
                <JournalMenu />
            </BottomSheetView>
        </BottomSheetModal>
    );
});

export default JournalMenuModal;
