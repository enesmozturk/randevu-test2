import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PaginationDots from './PaginationDots'; 

type Props = {
  image: any;
  title: string;
  description: string;
  buttonLabel: string;
  onNext: () => void;
  totalSteps: number;     // Yeni prop
  currentStep: number;    // Yeni prop
};

const OnboardingTemplate = ({ image, title, description, buttonLabel, onNext, totalSteps, currentStep }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity style={styles.button} onPress={onNext}>
        <Text style={styles.buttonText}>{buttonLabel}</Text>
      </TouchableOpacity>
      <PaginationDots totalSteps={totalSteps} currentStep={currentStep} />
    </View>
  );
};

export default OnboardingTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111111',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#111111',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#0066FF',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
