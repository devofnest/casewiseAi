import java.util.List;

public class EventDetailDTO {
    private List<String> searchKeyword; // 배열
    private int eventNum;               // 숫자
    private String eventNm;            // 문자열
    private char type;                 // 문자
    private String summary;            // 300자 제한은 주석 또는 유효성 검사로 처리

    // 생성자, getter, setter
    public List<String> getSearchKeyword() {
        return searchKeyword;
    }

    public void setSearchKeyword(List<String> searchKeyword) {
        this.searchKeyword = searchKeyword;
    }

    public int getEventNum() {
        return eventNum;
    }

    public void setEventNum(int eventNum) {
        this.eventNum = eventNum;
    }

    public String getEventNm() {
        return eventNm;
    }

    public void setEventNm(String eventNm) {
        this.eventNm = eventNm;
    }

    public char getType() {
        return type;
    }

    public void setType(char type) {
        this.type = type;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        if (summary.length() > 300) {
            throw new IllegalArgumentException("Summary는 300자 이하여야 합니다.");
        }
        this.summary = summary;
    }
}
