import java.util.Scanner;

public class AnagramCheck {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        
        System.out.print("Enter first string: ");
        String s1 = sc.nextLine().trim();
        System.out.print("Enter second string: ");
        String s2 = sc.nextLine().trim();

        boolean result = areAnagrams(s1, s2);
        System.out.println(result);
    }

    private static boolean areAnagrams(String s1, String s2) {
        
        if (s1.length() != s2.length()) {
            return false;
        }

        
        int[] counts = new int[256];  

        for (int i = 0; i < s1.length(); i++) {
            counts[s1.charAt(i)]++;
            counts[s2.charAt(i)]--;
        }

        
        for (int count : counts) {
            if (count != 0) {
                return false;
            }
        }
        return true;
    }
}
