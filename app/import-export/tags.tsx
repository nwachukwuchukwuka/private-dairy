import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Modal, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface TagsModalProps {
    visible: boolean;
    onClose: () => void;
}

const TagsModal: React.FC<TagsModalProps> = ({ visible, onClose }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <Pressable onPress={onClose} className="flex-1 justify-center items-center bg-black/60">
                <Pressable className="bg-[#2C2C2E] w-[80%] rounded-lg overflow-hidden ">
                    <View className="flex-row bg-gray-600 rounded-lg p-1 m-3">
                        <TouchableOpacity className="flex-1 p-1.5 rounded-md bg-gray-500">
                            <Text className="text-white text-center">All Journals</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-1 p-1.5 rounded-md">
                            <Text className="text-white text-center">Selected Journal(s)</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        placeholder="Type Tag"
                        placeholderTextColor="gray"
                        className="text-white text-lg border-b border-t border-gray-600 mx-4 pb-2"
                    />
                    <View className="flex-row items-center justify-between p-4">
                        <View className="flex-row items-center">
                            <Ionicons name="pricetag" size={20} color="gray" />
                            <Text className="text-white text-lg ml-3">No Tags</Text>
                        </View>
                        <Text className="text-gray-400">0</Text>
                    </View>
                    <TouchableOpacity onPress={onClose} className=" py-3">
                        <Text className="text-blue-500 text-center text-lg font-bold">Done</Text>
                    </TouchableOpacity>
                </Pressable>
            </Pressable>
        </Modal>
    );
};

export default TagsModal;