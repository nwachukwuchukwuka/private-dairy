import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');
const TemplateCard = ({ id, color, icon, name, onPress }: { id: string, color: string, icon: any, name: string, onPress: () => void }) => (
    <TouchableOpacity onPress={onPress} style={{ width: width / 2.5 }} className="items-center mr-4">
        <View style={{ backgroundColor: color }} className="w-full aspect-square rounded-2xl items-center justify-center">
            <Ionicons name={icon} size={40} color="white" />
        </View>
        <Text className="text-white mt-2 text-center" numberOfLines={1}>{name}</Text>
    </TouchableOpacity>
);

const TemplateSection = ({ title, subtitle, children }: { title: string, subtitle: string, children: React.ReactNode }) => (
    <View className="mb-8">
        <Text className="text-white text-xl font-bold px-4">{title}</Text>
        <Text className="text-gray-400 text-sm mb-4 px-4">{subtitle}</Text>

        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
        >
            {children}
        </ScrollView>
    </View>
);

const GalleryTab = () => {
    const router = useRouter();

    const handleCardPress = (templateId: string) => {
        router.push({
            pathname: '/more/template-detail',
            params: { initialTemplateId: templateId }
        });
    };

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
            <TemplateSection title="Getting Started" subtitle="Templates are a great way to add structure and consistency to your entries.">
                <TemplateCard id="daily-gratitude" color="#34B4E8" icon="sunny-outline" name="Daily Gratitude" onPress={() => handleCardPress('daily-gratitude')} />
                <TemplateCard id="5-min-am" color="#7ED321" icon="time-outline" name="5 minutes A.M." onPress={() => handleCardPress('5-min-am')} />
                <TemplateCard id="one-photo" color="#5AC8FA" icon="image-outline" name="One photo" onPress={() => handleCardPress('one-photo')} />
                <TemplateCard id="daily-goal-plan" color="#5AC8FA" icon="image-outline" name="Daily Goal Plan" onPress={() => handleCardPress('daily-goal-plan')} />
                <TemplateCard id="to-do" color="#5AC8FA" icon="image-outline" name="To-Do" onPress={() => handleCardPress('to-do')} />
                <TemplateCard id="bullet-journal" color="#5AC8FA" icon="image-outline" name="Bullet Journal" onPress={() => handleCardPress('bullet-journal')} />
            </TemplateSection>

            <TemplateSection title="Reflections" subtitle="Explore your thoughts and emotions through introspection.">
                <TemplateCard id="morning" color="#FFC900" icon="sunny-outline" name="Morning" onPress={() => handleCardPress('morning')} />
                <TemplateCard id="evening" color="#FFA500" icon="moon-outline" name="Evening" onPress={() => handleCardPress('evening')} />
                <TemplateCard id="weekly" color="#FF69B4" icon="calendar-outline" name="Weekly" onPress={() => handleCardPress('weekly')} />
                <TemplateCard id="monthly" color="#FF69B4" icon="calendar-outline" name="Monthly" onPress={() => handleCardPress('monthly')} />
            </TemplateSection>

            <TemplateSection title="Gratitude" subtitle="Cultivate a positive outlook with daily gratitude practice.">
                <TemplateCard id="daily-gratitude" color="#34B4E8" icon="sunny-outline" name="Daily Gratitude" onPress={() => handleCardPress('daily-gratitude')} />
                <TemplateCard id="weekly" color="#5AC8FA" icon="calendar-outline" name="Weekly" onPress={() => handleCardPress('weekly')} />
                <TemplateCard id="gratitude" color="#007AFF" icon="arrow-down-circle-outline" name="Gratitude" onPress={() => handleCardPress('gratitude')} />
            </TemplateSection>

            <TemplateSection title="Check-Ins" subtitle="Stay mindful with regular self-assessments.">
                <TemplateCard id="daily" color="#D1B49A" icon="sunny-outline" name="Daily" onPress={() => handleCardPress('daily')} />
                <TemplateCard id="weekly" color="#A9A9A9" icon="calendar-outline" name="Weekly" onPress={() => handleCardPress('weekly')} />
                <TemplateCard id="emotional" color="#E5E5EA" icon="happy-outline" name="Emotional" onPress={() => handleCardPress('emotional')} />
            </TemplateSection>

            <TemplateSection title="Short and sweet" subtitle="Capture your thoughts on the go with fast and simple prompts.">
                <TemplateCard id="5-min-am" color="#7ED321" icon="time-outline" name="5 minutes A.M." onPress={() => handleCardPress('5-min-am')} />
                <TemplateCard id="5-min-pm" color="#44DBB9" icon="moon-outline" name="5 minutes P.M." onPress={() => handleCardPress('5-min-pm')} />
                <TemplateCard id="one-sentence" color="#34B4E8" icon="flash-outline" name="One sentence" onPress={() => handleCardPress('one-sentence')} />
            </TemplateSection>
        </ScrollView>
    );
};

export default GalleryTab;