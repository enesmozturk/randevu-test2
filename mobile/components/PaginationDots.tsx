import React from 'react';
import { View, StyleSheet } from 'react-native';

type PaginationDotsProps = {
  totalSteps: number;
  currentStep: number;
};

const PaginationDots = ({ totalSteps, currentStep }: PaginationDotsProps) => {
  return (
    <View style={styles.paginationContainer}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isActive = index + 1 === currentStep;
        return (
          <View
            key={index}
            style={[
              styles.dot,
              isActive ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: '#0066FF',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
});

export default PaginationDots;
