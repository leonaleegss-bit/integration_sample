#include <iostream>
#include <string>

public int ConvertUserInput(string input) {

    if (int.TryParse(input, out int result)) {
        return result;
    }
    return 0; 
}