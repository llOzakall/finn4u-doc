package utils

func NullableString(s string) *string {
	if s == "" {
		return nil
	}
	return &s
}
