package CodeWars.Java;

public class findNeedle {
    public static String needle(Object[] haystack) {
        for (int i = 0; i < haystack.length; i++) {
        if ("needle".equals(haystack[i])) {
            return "found the needle at position " + i;
        }
        }
        return "needle not found";
    }
}
